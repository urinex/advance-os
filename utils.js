// ============================================
// STORAGE UTILITIES
// ============================================

var STORAGE_PREFIX = 'os-study-';

function loadState(key, defaultVal) {
  try {
    var raw = localStorage.getItem(STORAGE_PREFIX + key);
    return raw ? JSON.parse(raw) : defaultVal;
  } catch (e) { return defaultVal; }
}

function saveState(key, val) {
  localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(val));
}

function loadCompletedTopics() {
  var arr = loadState('completed', []);
  return new Set(arr);
}

function saveCompletedTopics(ids) {
  saveState('completed', Array.from(ids));
}

function loadPracticeResults() {
  return loadState('practice-results', {});
}

function savePracticeResults(r) {
  saveState('practice-results', r);
}

// ============================================
// CPU SCHEDULING ALGORITHMS
// ============================================

function schedulingCalcResult(processes, ct, gantt) {
  var tat = {};
  var wt = {};
  var totalTat = 0, totalWt = 0;
  for (var i = 0; i < processes.length; i++) {
    var p = processes[i];
    tat[p.id] = ct[p.id] - p.arrivalTime;
    wt[p.id] = tat[p.id] - p.burstTime;
    totalTat += tat[p.id];
    totalWt += wt[p.id];
  }
  return {
    ganttChart: gantt,
    completionTime: ct,
    turnaroundTime: tat,
    waitingTime: wt,
    avgTurnaroundTime: totalTat / processes.length,
    avgWaitingTime: totalWt / processes.length
  };
}

function fcfs(processes) {
  var sorted = processes.slice().sort(function(a, b) { return a.arrivalTime - b.arrivalTime; });
  var time = 0;
  var ct = {};
  var gantt = [];
  for (var i = 0; i < sorted.length; i++) {
    var p = sorted[i];
    if (time < p.arrivalTime) time = p.arrivalTime;
    var start = time;
    time += p.burstTime;
    ct[p.id] = time;
    gantt.push({ processId: p.id, start: start, end: time });
  }
  return schedulingCalcResult(processes, ct, gantt);
}

function sjf(processes) {
  var remaining = processes.map(function(p) { return { id: p.id, arrivalTime: p.arrivalTime, burstTime: p.burstTime, rem: p.burstTime }; });
  var time = 0;
  var ct = {};
  var done = new Set();
  var gantt = [];
  while (done.size < processes.length) {
    var avail = remaining.filter(function(p) { return p.arrivalTime <= time && !done.has(p.id); });
    if (avail.length === 0) { time++; continue; }
    avail.sort(function(a, b) { return a.rem - b.rem; });
    var cur = avail[0];
    var start = time;
    time += cur.rem;
    ct[cur.id] = time;
    done.add(cur.id);
    gantt.push({ processId: cur.id, start: start, end: time });
  }
  return schedulingCalcResult(processes, ct, gantt);
}

function roundRobin(processes, quantum) {
  var remaining = processes.map(function(p) { return { id: p.id, arrivalTime: p.arrivalTime, burstTime: p.burstTime, rem: p.burstTime }; });
  var time = 0;
  var ct = {};
  var gantt = [];
  var queue = [];
  var inQueue = new Set();
  var sorted = remaining.slice().sort(function(a, b) { return a.arrivalTime - b.arrivalTime; });
  var idx = 0;
  var done = new Set();
  if (sorted.length > 0) { queue.push(sorted[idx]); inQueue.add(sorted[idx].id); idx++; }
  while (done.size < processes.length) {
    if (queue.length === 0) {
      time++;
      while (idx < sorted.length && sorted[idx].arrivalTime <= time) {
        if (!inQueue.has(sorted[idx].id)) { queue.push(sorted[idx]); inQueue.add(sorted[idx].id); }
        idx++;
      }
      continue;
    }
    var cur = queue.shift();
    var execTime = Math.min(quantum, cur.rem);
    var start = time;
    time += execTime;
    cur.rem -= execTime;
    while (idx < sorted.length && sorted[idx].arrivalTime <= time) {
      if (!inQueue.has(sorted[idx].id)) { queue.push(sorted[idx]); inQueue.add(sorted[idx].id); }
      idx++;
    }
    if (cur.rem > 0) {
      queue.push(cur);
    } else {
      ct[cur.id] = time;
      done.add(cur.id);
    }
    gantt.push({ processId: cur.id, start: start, end: time });
  }
  return schedulingCalcResult(processes, ct, gantt);
}

// ============================================
// BANKER'S ALGORITHM
// ============================================

function bankersAlgorithm(input) {
  var processes = input.processes;
  var resources = input.resources;
  var allocation = input.allocation;
  var maximum = input.maximum;
  var available = input.available;
  var n = processes.length;
  var m = resources.length;

  // Calculate Need matrix
  var need = [];
  for (var i = 0; i < n; i++) {
    need[i] = [];
    for (var j = 0; j < m; j++) {
      need[i][j] = maximum[i][j] - allocation[i][j];
    }
  }

  // Safety algorithm
  var work = available.slice();
  var finish = new Array(n).fill(false);
  var sequence = [];
  var steps = [];
  var found = true;

  while (found) {
    found = false;
    for (var i = 0; i < n; i++) {
      if (finish[i]) continue;
      var canAllocate = true;
      for (var j = 0; j < m; j++) {
        if (need[i][j] > work[j]) { canAllocate = false; break; }
      }
      if (canAllocate) {
        var newAvail = work.map(function(w, j) { return w + allocation[i][j]; });
        steps.push({ process: processes[i], available: work.slice(), need: need[i].slice(), canAllocate: true, newAvailable: newAvail });
        for (var j = 0; j < m; j++) work[j] += allocation[i][j];
        finish[i] = true;
        sequence.push(processes[i]);
        found = true;
      } else {
        steps.push({ process: processes[i], available: work.slice(), need: need[i].slice(), canAllocate: false, newAvailable: null });
      }
    }
  }

  var safe = finish.every(function(f) { return f; });
  return { needMatrix: need, safe: safe, safeSequence: safe ? sequence : null, steps: steps };
}
