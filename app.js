// ============================================
// OS STUDY — Main Application
// ============================================

(function() {
  'use strict';

  var mainContent = document.getElementById('main-content');
  var sidebar = document.getElementById('sidebar');
  var overlay = document.getElementById('sidebar-overlay');
  var mobileMenuBtn = document.getElementById('mobile-menu-btn');

  // ============================================
  // ROUTING
  // ============================================

  function getRoute() {
    var hash = window.location.hash || '#/';
    return hash.replace('#', '');
  }

  function navigate(path) {
    window.location.hash = '#' + path;
  }

  function updateActiveNav() {
    var route = getRoute();
    var navItems = sidebar.querySelectorAll('.nav-item');
    navItems.forEach(function(item) {
      var itemRoute = item.getAttribute('data-route');
      if (itemRoute === route) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  function closeMobileSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('visible');
  }

  function openMobileSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('visible');
  }

  // ============================================
  // HEADER PROGRESS UPDATE
  // ============================================

  function updateHeaderProgress() {
    var completed = loadCompletedTopics();
    var total = syllabus.length;
    var done = completed.size;
    var pct = Math.round((done / total) * 100);
    document.getElementById('header-completed-count').textContent = done;
    document.getElementById('header-progress-fill').style.width = pct + '%';
  }

  // ============================================
  // HELPER: Generate badge HTML
  // ============================================

  function pyqBadgeClass(status) {
    var map = { repeated: 'badge-red', 'asked-2024': 'badge-blue', 'asked-2025': 'badge-indigo', 'asked-once': 'badge-amber' };
    return map[status] || 'badge-slate';
  }

  function pyqBadgeText(status) {
    var map = { repeated: 'Repeated', 'asked-2024': '2024', 'asked-2025': '2025', 'asked-once': 'PYQ' };
    return map[status] || '';
  }

  function priorityBadgeClass(p) {
    var map = { 'very-high': 'badge-red', high: 'badge-amber', medium: 'badge-slate', low: 'badge-slate' };
    return map[p] || 'badge-slate';
  }

  function priorityLabel(p) {
    var map = { 'very-high': 'Very High', high: 'High', medium: 'Medium', low: 'Low' };
    return map[p] || p;
  }

  function pyqStatusLabel(status) {
    var map = {
      repeated: 'Asked in 2024 & 2025 — VERY IMPORTANT',
      'asked-2024': 'Asked in 2024-25',
      'asked-2025': 'Asked in 2025-26',
      'asked-once': 'Asked once in PYQ',
      'not-asked': 'Not yet seen in available PYQs'
    };
    return map[status] || status;
  }

  function levelBadgeClass(level) {
    var map = { 'exam-pattern': 'badge-red', conceptual: 'badge-blue', application: 'badge-indigo', basic: 'badge-slate' };
    return map[level] || 'badge-slate';
  }

  // ============================================
  // PAGE: Dashboard
  // ============================================

  function renderDashboard() {
    var completed = loadCompletedTopics();
    var total = syllabus.length;
    var done = completed.size;
    var pct = Math.round((done / total) * 100);

    var veryHigh = syllabus.filter(function(t) { return t.priority === 'very-high'; });
    var repeated = syllabus.filter(function(t) { return t.pyqStatus === 'repeated'; });
    var notAsked = syllabus.filter(function(t) { return t.pyqStatus === 'not-asked'; });

    var recommended = syllabus
      .filter(function(t) { return !completed.has(t.id) && (t.priority === 'very-high' || t.priority === 'high'); })
      .slice(0, 5);

    var html = '';
    html += '<div class="page-header"><h1 class="page-title">Dashboard</h1><p class="page-subtitle">Your OS exam preparation at a glance</p></div>';

    // Progress
    html += '<div class="card"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">';
    html += '<div><span style="font-size:28px;font-weight:800;color:var(--color-primary);letter-spacing:-0.03em;">' + done + '/' + total + '</span>';
    html += '<span style="font-size:13px;color:var(--color-text-muted);margin-left:8px;">topics completed</span></div>';
    html += '<span style="font-size:13px;font-weight:600;color:var(--color-text-secondary);">' + pct + '%</span></div>';
    html += '<div class="progress-track"><div class="progress-fill" style="width:' + pct + '%;"></div></div></div>';

    // Stats
    html += '<div class="card" style="margin-top:16px;"><div class="card-title">Overview</div><div class="stat-grid">';
    html += '<div class="stat-card"><div class="stat-value" style="color:var(--color-primary);">' + total + '</div><div class="stat-label">Total Topics</div></div>';
    html += '<div class="stat-card"><div class="stat-value" style="color:var(--color-indigo);">' + (total - notAsked.length) + '</div><div class="stat-label">In PYQs</div></div>';
    html += '<div class="stat-card"><div class="stat-value" style="color:var(--color-red);">' + repeated.length + '</div><div class="stat-label">Repeated</div></div>';
    html += '<div class="stat-card"><div class="stat-value" style="color:var(--color-amber);">' + veryHigh.length + '</div><div class="stat-label">Very High</div></div>';
    html += '<div class="stat-card"><div class="stat-value" style="color:var(--color-text-muted);">' + notAsked.length + '</div><div class="stat-label">Not Yet Asked</div></div>';
    html += '<div class="stat-card"><div class="stat-value" style="color:var(--color-green);">' + done + '</div><div class="stat-label">Completed</div></div>';
    html += '</div></div>';

    // Quick Actions
    html += '<div class="card" style="margin-top:16px;"><div class="card-title">Quick Actions</div>';
    html += '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:10px;">';
    var actions = [
      { to: '/pyqs', label: 'PYQs', icon: '\u{1F4DD}' },
      { to: '/predictions', label: 'Predictions', icon: '\u{1F52E}' },
      { to: '/calculator', label: 'Calculator', icon: '\u{1F9EE}' },
      { to: '/exam', label: 'Exam Mode', icon: '\u{1F3AF}' }
    ];
    actions.forEach(function(a) {
      html += '<a href="#' + a.to + '" style="display:flex;flex-direction:column;align-items:center;gap:6px;padding:16px 12px;background:var(--color-bg);border-radius:var(--radius-sm);border:1px solid var(--color-border-light);text-decoration:none;transition:all 0.12s ease;">';
      html += '<span style="font-size:22px;">' + a.icon + '</span>';
      html += '<span style="font-size:12px;font-weight:600;color:var(--color-text-secondary);">' + a.label + '</span></a>';
    });
    html += '</div></div>';

    // Continue Studying
    if (recommended.length > 0) {
      html += '<div class="card" style="margin-top:16px;"><div class="card-title">Continue Studying</div><div style="display:flex;flex-direction:column;gap:6px;">';
      recommended.forEach(function(t) {
        html += '<a href="#/topic/' + t.id + '" class="link-card"><div style="display:flex;align-items:center;gap:10px;">';
        html += '<span style="font-size:13px;font-weight:600;color:var(--color-text);">' + t.title + '</span>';
        html += '<span class="badge badge-slate">' + t.unitName + '</span></div>';
        html += '<div style="display:flex;align-items:center;gap:6px;">';
        if (t.pyqStatus === 'repeated') html += '<span class="badge badge-red">Repeated</span>';
        if (t.priority === 'very-high') html += '<span style="font-size:13px;">&#x1F525;</span>';
        html += '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:var(--color-text-muted);"><polyline points="9 18 15 12 9 6"/></svg>';
        html += '</div></a>';
      });
      html += '</div></div>';
    }

    // PYQ Pattern Table
    html += '<div class="card" style="margin-top:16px;"><div class="card-title">PYQ Pattern Analysis</div><div class="table-scroll"><table class="data-table"><thead><tr>';
    html += '<th>Topic</th><th style="text-align:center;">2024</th><th style="text-align:center;">2025</th><th style="text-align:center;">Freq</th><th style="text-align:center;">Priority</th>';
    html += '</tr></thead><tbody>';
    syllabus.filter(function(t) { return t.pyqStatus !== 'not-asked'; }).slice(0, 15).forEach(function(t) {
      html += '<tr><td style="font-weight:600;">' + t.title + '</td>';
      html += '<td style="text-align:center;">' + ((t.pyqStatus === 'repeated' || t.pyqStatus === 'asked-2024') ? '<span class="badge badge-green">Yes</span>' : '') + '</td>';
      html += '<td style="text-align:center;">' + ((t.pyqStatus === 'repeated' || t.pyqStatus === 'asked-2025') ? '<span class="badge badge-green">Yes</span>' : '') + '</td>';
      html += '<td style="text-align:center;font-weight:600;">' + (t.pyqStatus === 'repeated' ? 2 : 1) + '</td>';
      html += '<td style="text-align:center;"><span class="priority-' + t.priority + '" style="font-weight:700;font-size:12px;">' + priorityLabel(t.priority) + '</span></td></tr>';
    });
    html += '</tbody></table></div></div>';

    return html;
  }

  // ============================================
  // PAGE: Syllabus
  // ============================================

  var syllabusState = { filter: 'all' };

  function renderSyllabus() {
    var completed = loadCompletedTopics();
    var units = [
      { id: 'introduction', name: 'Introduction' },
      { id: 'process-management', name: 'Process Management' },
      { id: 'cpu-scheduling', name: 'CPU Scheduling' },
      { id: 'deadlock', name: 'Deadlock' },
      { id: 'memory-management', name: 'Memory Management' }
    ];

    var html = '';
    html += '<div class="page-header"><h1 class="page-title">Syllabus (' + syllabus.length + ' Topics)</h1></div>';

    // Filter buttons
    html += '<div class="card" style="margin-bottom:16px;"><div class="filter-buttons">';
    html += '<button class="filter-btn' + (syllabusState.filter === 'all' ? ' active' : '') + '" onclick="setSyllabusFilter(\'all\')">All</button>';
    units.forEach(function(u) {
      html += '<button class="filter-btn' + (syllabusState.filter === u.id ? ' active' : '') + '" onclick="setSyllabusFilter(\'' + u.id + '\')">' + u.name + '</button>';
    });
    html += '</div></div>';

    // Topic lists
    units.filter(function(u) { return syllabusState.filter === 'all' || syllabusState.filter === u.id; }).forEach(function(u) {
      var ut = syllabus.filter(function(t) { return t.unit === u.id; });
      html += '<div style="margin-bottom:20px;">';
      html += '<div style="font-size:14px;font-weight:700;color:var(--color-text);margin-bottom:10px;display:flex;align-items:center;gap:8px;">';
      html += u.name + ' <span style="font-size:12px;font-weight:500;color:var(--color-text-muted);">(' + ut.length + ')</span></div>';
      html += '<div style="display:flex;flex-direction:column;gap:6px;">';
      ut.forEach(function(t) {
        var isDone = completed.has(t.id);
        var borderColor = isDone ? 'border-color:#bbf7d0;' : '';
        var bgColor = isDone ? 'background:#f0fdf4;' : '';
        html += '<div class="link-card" style="' + borderColor + bgColor + '">';
        html += '<a href="#/topic/' + t.id + '" style="flex:1;display:flex;align-items:center;gap:10px;text-decoration:none;">';
        html += '<span style="font-size:14px;">' + (isDone ? '\u2705' : '\u25CB') + '</span>';
        html += '<span style="font-size:14px;font-weight:500;color:var(--color-text);">' + t.title + '</span>';
        if (t.pyqStatus !== 'not-asked') {
          html += '<span class="badge ' + pyqBadgeClass(t.pyqStatus) + '">' + pyqBadgeText(t.pyqStatus) + '</span>';
        }
        html += '<span style="font-size:12px;font-weight:600;" class="priority-' + t.priority + '">';
        if (t.priority === 'very-high') html += '\u{1F525} Very High';
        else if (t.priority === 'high') html += 'High';
        else if (t.priority === 'medium') html += 'Medium';
        html += '</span></a>';
        html += '<button onclick="toggleTopicComplete(\'' + t.id + '\')" class="btn btn-sm ' + (isDone ? 'btn-outline' : 'btn-ghost') + '" style="font-size:12px;flex-shrink:0;">';
        html += isDone ? 'Done' : 'Mark';
        html += '</button></div>';
      });
      html += '</div></div>';
    });

    return html;
  }

  window.setSyllabusFilter = function(f) {
    syllabusState.filter = f;
    renderPage();
  };

  window.toggleTopicComplete = function(id) {
    var completed = loadCompletedTopics();
    if (completed.has(id)) completed.delete(id);
    else completed.add(id);
    saveCompletedTopics(completed);
    updateHeaderProgress();
    renderPage();
  };

  // ============================================
  // PAGE: TopicPage
  // ============================================

  var topicPageState = { showAnswer: {} };

  function renderTopicPage(topicId) {
    var topic = syllabus.find(function(t) { return t.id === topicId; });
    var completed = loadCompletedTopics();

    if (!topic) {
      return '<div style="text-align:center;padding:60px 20px;"><h2 style="font-size:18px;font-weight:600;margin-bottom:12px;">Topic not found</h2><a href="#/syllabus" style="color:var(--color-primary);font-size:14px;">Go to Syllabus</a></div>';
    }

    var html = '';

    // Back link
    html += '<a href="#/syllabus" style="display:inline-flex;align-items:center;gap:4px;font-size:13px;color:var(--color-text-muted);margin-bottom:16px;text-decoration:none;">';
    html += '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg> Back to Syllabus</a>';

    // Topic Header
    html += '<div class="card"><div style="display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-bottom:12px;">';
    html += '<h1 style="font-size:22px;font-weight:700;letter-spacing:-0.02em;">' + topic.title + '</h1>';
    html += '<span class="badge ' + priorityBadgeClass(topic.priority) + '">' + topic.priority + '</span>';
    html += '<span class="badge badge-slate">' + topic.unitName + '</span></div>';
    html += '<div class="info-amber" style="display:flex;align-items:center;gap:6px;">';
    html += '<span class="badge ' + pyqBadgeClass(topic.pyqStatus) + '">' + topic.pyqStatus + '</span>';
    html += '<span>' + pyqStatusLabel(topic.pyqStatus) + '</span></div></div>';

    // Understanding
    html += '<div class="topic-block"><div class="topic-block-title"><span>&#x1F4D6;</span> Understanding the Topic</div>';
    html += '<div style="margin-bottom:18px;"><div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;color:var(--color-text-muted);margin-bottom:6px;">Overview</div>';
    html += '<p style="font-size:14px;line-height:1.7;color:var(--color-text);">' + topic.overview + '</p></div>';
    html += '<div style="margin-bottom:18px;"><div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;color:var(--color-text-muted);margin-bottom:6px;">Definition</div>';
    html += '<div class="topic-definition">' + topic.definition + '</div></div>';
    html += '<div style="margin-bottom:18px;"><div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;color:var(--color-text-muted);margin-bottom:6px;">Easy Explanation</div>';
    html += '<p style="font-size:14px;line-height:1.7;color:var(--color-text);">' + topic.easyExplanation + '</p></div>';
    html += '<div><div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;color:var(--color-text-muted);margin-bottom:6px;">Real-Life Example</div>';
    html += '<p style="font-size:14px;line-height:1.7;color:var(--color-text);">' + topic.realLifeExample + '</p></div></div>';

    // Key Points
    html += '<div class="topic-block"><div class="topic-block-title"><span>&#x1F4A1;</span> Key Points</div>';
    html += '<div style="display:flex;flex-direction:column;gap:8px;">';
    topic.keyPoints.forEach(function(kp, i) {
      html += '<div class="key-point-item"><span class="key-point-num">' + (i + 1) + '.</span><span>' + kp + '</span></div>';
    });
    html += '</div></div>';

    // Diagram
    html += '<div class="topic-block"><div class="topic-block-title"><span>&#x1F4CA;</span> Diagram / Visual</div>';
    html += '<div style="background:var(--color-bg);padding:16px 20px;border-radius:var(--radius-sm);border:1px dashed var(--color-border);text-align:center;color:var(--color-text-secondary);font-size:14px;">';
    html += topic.diagramDescription + '</div></div>';

    // Exam POV
    if (topic.examPointOfView.length > 0) {
      html += '<div class="topic-block"><div class="topic-block-title"><span>&#x1F3AF;</span> Exam Point of View</div>';
      html += '<div style="display:flex;flex-direction:column;gap:10px;">';
      topic.examPointOfView.forEach(function(ep) {
        html += '<div class="topic-exam-pov" style="display:flex;align-items:flex-start;gap:10px;">';
        html += '<span class="badge badge-blue">' + ep.year + '</span>';
        html += '<span style="flex:1;font-size:14px;color:var(--color-text);">' + ep.question + '</span>';
        if (ep.isRepeated) html += '<span class="badge badge-red">\u{1F525} Repeated</span>';
        html += '</div>';
      });
      html += '</div></div>';
    }

    // Exam Answer
    html += '<div class="topic-block"><div class="topic-block-title"><span>&#x2705;</span> Exam Answer</div>';
    html += '<div class="btn-group" style="margin-bottom:14px;">';
    var s3 = topicPageState.showAnswer['threeMarks-' + topic.id];
    var s5 = topicPageState.showAnswer['fiveMarks-' + topic.id];
    html += '<button onclick="toggleTopicAnswer(\'' + topic.id + '\',\'threeMarks\')" class="btn ' + (s3 ? 'btn-ghost' : 'btn-outline') + '" style="font-size:13px;">' + (s3 ? '\u25BC' : '\u25B6') + ' 3-Mark Answer</button>';
    html += '<button onclick="toggleTopicAnswer(\'' + topic.id + '\',\'fiveMarks\')" class="btn ' + (s5 ? 'btn-ghost' : 'btn-outline') + '" style="font-size:13px;">' + (s5 ? '\u25BC' : '\u25B6') + ' 5-Mark Answer</button>';
    html += '</div>';
    if (s3) {
      html += '<div class="qa-answer"><div class="qa-answer-label">3-Mark Answer</div><p>' + topic.examAnswer.threeMarks + '</p></div>';
    }
    if (s5) {
      html += '<div class="qa-answer" style="margin-top:10px;"><div class="qa-answer-label">5-Mark Answer</div><p>' + topic.examAnswer.fiveMarks + '</p></div>';
    }
    html += '</div>';

    // Common Mistakes
    if (topic.commonMistakes.length > 0) {
      html += '<div class="topic-block"><div class="topic-block-title"><span>&#x26A0;&#xFE0F;</span> Common Mistakes</div>';
      html += '<div style="display:flex;flex-direction:column;gap:8px;">';
      topic.commonMistakes.forEach(function(m) {
        html += '<div class="topic-mistake"><span style="font-weight:700;color:var(--color-red);">\u2717</span><span>' + m + '</span></div>';
      });
      html += '</div></div>';
    }

    // Quick Revision
    html += '<div class="topic-block"><div class="topic-block-title"><span>&#x26A1;</span> Quick Revision</div>';
    html += '<div class="topic-revision">' + topic.quickRevision + '</div></div>';

    // Practice Questions
    if (topic.practiceQuestions.length > 0) {
      html += '<div class="topic-block"><div class="topic-block-title"><span>&#x1F4DD;</span> Practice Questions</div>';
      html += '<div style="display:flex;flex-direction:column;gap:12px;">';
      topic.practiceQuestions.forEach(function(pq) {
        var pqKey = 'pq-' + pq.id;
        var showPq = topicPageState.showAnswer[pqKey];
        html += '<div class="qa-card"><div class="qa-card-header">';
        html += '<span class="badge ' + levelBadgeClass(pq.level) + '">' + pq.level + '</span></div>';
        html += '<div class="qa-card-body"><div class="qa-question">' + pq.question + '</div>';
        if (!showPq) {
          html += '<div class="qa-toggle"><button onclick="toggleTopicAnswer(\'' + topic.id + '\',\'' + pqKey + '\')" class="btn btn-outline btn-sm">\u25B6 Show Answer</button></div>';
        } else {
          html += '<div class="qa-answer"><div class="qa-answer-label">Answer</div>';
          html += '<p style="font-weight:600;margin-bottom:4px;">' + pq.answer + '</p>';
          html += '<p style="opacity:0.8;">' + pq.explanation + '</p></div>';
        }
        html += '</div></div>';
      });
      html += '</div></div>';
    }

    // Mark Complete
    var isDone = completed.has(topic.id);
    html += '<div style="margin-top:20px;padding-bottom:24px;">';
    html += '<button onclick="toggleTopicComplete(\'' + topic.id + '\')" class="btn ' + (isDone ? 'btn-outline' : 'btn-primary') + '" style="padding:10px 24px;">';
    html += isDone ? '\u2705 Completed \u2014 Click to Unmark' : '\u2610 Mark as Complete';
    html += '</button></div>';

    return html;
  }

  window.toggleTopicAnswer = function(topicId, key) {
    var fullKey = key + '-' + topicId;
    if (key === 'threeMarks' || key === 'fiveMarks') {
      fullKey = key + '-' + topicId;
    } else {
      fullKey = key;
    }
    topicPageState.showAnswer[fullKey] = !topicPageState.showAnswer[fullKey];
    renderPage();
  };

  // ============================================
  // PAGE: PYQPage
  // ============================================

  var pyqState = { year: 'all', type: 'all' };

  function renderPYQPage() {
    var filtered = pyqs.filter(function(p) {
      if (pyqState.year !== 'all' && p.year !== pyqState.year) return false;
      if (pyqState.type !== 'all' && p.type !== pyqState.type) return false;
      return true;
    });

    var html = '';
    html += '<div class="page-header"><h1 class="page-title">Previous Year Questions</h1>';
    html += '<p class="page-subtitle">2024-25 &amp; 2025-26 mid-term papers. OR questions marked.</p></div>';

    // Filters
    html += '<div class="card" style="margin-bottom:16px;"><div class="filter-bar">';
    html += '<div class="filter-group"><span class="filter-label">Year</span><div class="filter-buttons">';
    ['all', '2024-25', '2025-26'].forEach(function(y) {
      html += '<button class="filter-btn' + (pyqState.year === y ? ' active' : '') + '" onclick="setPyqFilter(\'year\',\'' + y + '\')">' + (y === 'all' ? 'All Years' : y) + '</button>';
    });
    html += '</div></div>';
    html += '<div class="filter-group"><span class="filter-label">Type</span><div class="filter-buttons">';
    ['all', 'theory', 'numerical'].forEach(function(t) {
      html += '<button class="filter-btn' + (pyqState.type === t ? ' active-purple' : '') + '" onclick="setPyqFilter(\'type\',\'' + t + '\')">' + (t === 'all' ? 'All Types' : t.charAt(0).toUpperCase() + t.slice(1)) + '</button>';
    });
    html += '</div></div></div></div>';

    // Questions
    html += '<div style="display:flex;flex-direction:column;gap:10px;">';
    filtered.forEach(function(p) {
      var orStyle = p.isOR ? 'border-left:3px solid var(--color-amber);' : '';
      html += '<div class="qa-card" style="' + orStyle + '">';
      html += '<div class="qa-card-header">';
      html += '<span class="badge badge-blue">' + p.year + '</span>';
      html += '<span style="font-size:12px;font-weight:600;color:var(--color-text-secondary);">' + p.section + ' \u2014 ' + p.questionNumber + '</span>';
      html += '<span class="badge ' + (p.type === 'numerical' ? 'badge-indigo' : 'badge-blue') + '">' + p.type + '</span>';
      html += '<span class="badge ' + (p.difficulty === 'hard' ? 'badge-red' : p.difficulty === 'medium' ? 'badge-amber' : 'badge-green') + '">' + p.difficulty + '</span>';
      html += '<span class="badge badge-slate">' + p.marks + ' marks</span>';
      if (p.isOR) html += '<span class="badge badge-amber">OR</span>';
      if (p.priority === 'very-high') html += '<span class="badge badge-red">\u{1F525} Very High</span>';
      html += '</div><div class="qa-card-body"><div class="qa-question">' + p.questionText + '</div>';
      html += '<div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:10px;">';
      p.relatedTopics.forEach(function(t) {
        html += '<span class="badge badge-indigo">' + t + '</span>';
      });
      html += '</div></div></div>';
    });
    if (filtered.length === 0) {
      html += '<div class="card" style="text-align:center;padding:40px 20px;color:var(--color-text-muted);">No questions match the current filters.</div>';
    }
    html += '</div>';

    // Pattern Summary
    html += '<div class="card" style="margin-top:20px;"><div class="card-title">Pattern Analysis Summary</div>';
    html += '<div style="display:flex;flex-direction:column;gap:10px;">';
    html += '<div style="background:var(--color-green-light);border:1px solid #bbf7d0;border-radius:var(--radius-sm);padding:12px 16px;"><div style="font-size:12px;font-weight:700;color:var(--color-green);margin-bottom:4px;">Directly Repeated Concepts</div><div style="font-size:13px;color:var(--color-text);line-height:1.6;">Process States, Monolithic vs Microkernel, OS Services/Functions, CPU Scheduling Numericals</div></div>';
    html += '<div style="background:var(--color-primary-light);border:1px solid #bfdbfe;border-radius:var(--radius-sm);padding:12px 16px;"><div style="font-size:12px;font-weight:700;color:var(--color-primary);margin-bottom:4px;">Strongest Patterns</div><div style="font-size:13px;color:var(--color-text);line-height:1.6;">Section A: theory/definitions. Section B: numericals &amp; long answers. Synchronization tested multiple ways in 2024.</div></div>';
    html += '<div style="background:var(--color-amber-light);border:1px solid #fde68a;border-radius:var(--radius-sm);padding:12px 16px;"><div style="font-size:12px;font-weight:700;color:var(--color-amber);margin-bottom:4px;">OR Questions</div><div style="font-size:13px;color:var(--color-text);line-height:1.6;">Q8 in 2025-26 had an alternative (Banker\'s Algorithm OR Dining Philosophers).</div></div>';
    html += '</div></div>';

    return html;
  }

  window.setPyqFilter = function(field, val) {
    pyqState[field] = val;
    renderPage();
  };

  // ============================================
  // PAGE: ImportantTopics
  // ============================================

  function renderImportantTopics() {
    var sections = [
      { title: 'Very High Priority', sub: 'Topics directly repeated across both papers. MUST prepare.', filter: 'very-high', icon: '\u{1F525}\u{1F525}\u{1F525}' },
      { title: 'High Priority', sub: 'Asked in one paper, strongly connected to repeated patterns.', filter: 'high', icon: '\u{1F525}\u{1F525}' },
      { title: 'Medium Priority', sub: 'Important syllabus topics, asked once or foundational.', filter: 'medium', icon: '\u{1F525}' },
      { title: 'Not Yet Asked', sub: 'Not observed in available papers. Still important by syllabus relevance.', filter: 'low', icon: '\u25CB' }
    ];

    var html = '';
    html += '<div class="page-header"><h1 class="page-title">Important Topics</h1>';
    html += '<p class="page-subtitle">Based on PYQ frequency, semantic similarity, and syllabus importance</p></div>';

    sections.forEach(function(s) {
      var topics = syllabus.filter(function(t) { return t.priority === s.filter; });
      html += '<div style="margin-bottom:24px;">';
      html += '<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">';
      html += '<span style="font-size:14px;">' + s.icon + '</span>';
      html += '<span style="font-size:15px;font-weight:700;color:var(--color-text);">' + s.title + '</span>';
      html += '<span class="badge badge-slate">' + topics.length + '</span></div>';
      html += '<p style="font-size:13px;color:var(--color-text-muted);margin-bottom:10px;padding-left:26px;">' + s.sub + '</p>';
      html += '<div style="display:flex;flex-direction:column;gap:6px;">';
      topics.forEach(function(t) {
        html += '<a href="#/topic/' + t.id + '" class="link-card"><div style="display:flex;align-items:center;gap:8px;">';
        html += '<span style="font-size:14px;font-weight:500;">' + t.title + '</span>';
        html += '<span style="font-size:12px;color:var(--color-text-muted);">' + t.unitName + '</span>';
        if (t.pyqStatus !== 'not-asked' && t.pyqStatus !== 'asked-once') {
          html += '<span class="badge ' + pyqBadgeClass(t.pyqStatus) + '">';
          html += t.pyqStatus === 'repeated' ? 'Repeated' : t.pyqStatus === 'asked-2024' ? '2024-25' : '2025-26';
          html += '</span>';
        }
        html += '</div>';
        html += '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:var(--color-text-muted);"><polyline points="9 18 15 12 9 6"/></svg></a>';
      });
      html += '</div></div>';
    });

    return html;
  }

  // ============================================
  // PAGE: PredictionsPage
  // ============================================

  function renderPredictionsPage() {
    var probConfig = {
      'very-high': { label: 'Very High Probability', icon: '\u{1F525}\u{1F525}\u{1F525}', badge: 'badge-red' },
      high: { label: 'High Probability', icon: '\u{1F525}\u{1F525}', badge: 'badge-amber' },
      moderate: { label: 'Moderate Probability', icon: '\u{1F525}', badge: 'badge-slate' }
    };
    var probs = ['very-high', 'high', 'moderate'];

    var html = '';
    html += '<div class="page-header"><h1 class="page-title">Predicted Important Questions</h1>';
    html += '<p class="page-subtitle">Based on limited 2 papers. Study priorities, NOT guarantees.</p></div>';

    probs.forEach(function(prob) {
      var items = predictions.filter(function(p) { return p.probability === prob; });
      if (!items.length) return;
      var cfg = probConfig[prob];

      html += '<div style="margin-bottom:24px;">';
      html += '<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">';
      html += '<span style="font-size:14px;">' + cfg.icon + '</span>';
      html += '<span style="font-size:15px;font-weight:700;">' + cfg.label + '</span>';
      html += '<span class="badge badge-slate">' + items.length + '</span></div>';
      html += '<div style="display:flex;flex-direction:column;gap:10px;">';
      items.forEach(function(p) {
        html += '<div class="qa-card"><div class="qa-card-body">';
        html += '<div class="qa-question" style="margin-bottom:10px;">' + p.question + '</div>';
        html += '<div style="margin-bottom:10px;"><div style="font-size:12px;font-weight:700;color:var(--color-text-secondary);margin-bottom:4px;">Reasoning:</div>';
        html += '<ul style="margin-left:16px;font-size:13px;color:var(--color-text-secondary);line-height:1.7;">';
        p.reasoning.forEach(function(r) { html += '<li>' + r + '</li>'; });
        html += '</ul></div>';
        html += '<div style="display:flex;flex-wrap:wrap;gap:4px;">';
        p.relatedTopics.forEach(function(t) { html += '<span class="badge badge-indigo">' + t + '</span>'; });
        html += '</div></div></div>';
      });
      html += '</div></div>';
    });

    return html;
  }

  // ============================================
  // PAGE: Practice
  // ============================================

  var practiceState = { unit: 'all', level: 'all', answers: {} };

  function renderPracticePage() {
    var allQ = [];
    syllabus.forEach(function(t) {
      t.practiceQuestions.forEach(function(q) {
        allQ.push({ id: q.id, level: q.level, question: q.question, answer: q.answer, explanation: q.explanation, topicTitle: t.title, topicUnit: t.unit });
      });
    });

    var filtered = allQ.filter(function(q) {
      if (practiceState.unit !== 'all' && q.topicUnit !== practiceState.unit) return false;
      if (practiceState.level !== 'all' && q.level !== practiceState.level) return false;
      return true;
    });

    var unitOptions = [['all', 'All Units'], ['introduction', 'Introduction'], ['process-management', 'Process Mgmt'], ['cpu-scheduling', 'CPU Scheduling'], ['deadlock', 'Deadlock'], ['memory-management', 'Memory']];
    var levelOptions = [['all', 'All'], ['basic', 'Basic'], ['conceptual', 'Conceptual'], ['exam-pattern', 'Exam Pattern'], ['application', 'Application']];

    var html = '';
    html += '<div class="page-header"><h1 class="page-title">Practice Questions</h1>';
    html += '<p class="page-subtitle">' + filtered.length + ' questions available</p></div>';

    // Filters
    html += '<div class="card" style="margin-bottom:16px;"><div class="filter-bar">';
    html += '<div class="filter-group"><span class="filter-label">Unit</span><div class="filter-buttons">';
    unitOptions.forEach(function(opt) {
      html += '<button class="filter-btn' + (practiceState.unit === opt[0] ? ' active' : '') + '" onclick="setPracticeFilter(\'unit\',\'' + opt[0] + '\')">' + opt[1] + '</button>';
    });
    html += '</div></div>';
    html += '<div class="filter-group"><span class="filter-label">Level</span><div class="filter-buttons">';
    levelOptions.forEach(function(opt) {
      html += '<button class="filter-btn' + (practiceState.level === opt[0] ? ' active-purple' : '') + '" onclick="setPracticeFilter(\'level\',\'' + opt[0] + '\')">' + opt[1] + '</button>';
    });
    html += '</div></div></div></div>';

    // Questions
    html += '<div style="display:flex;flex-direction:column;gap:10px;">';
    filtered.slice(0, 50).forEach(function(q) {
      var showA = practiceState.answers[q.id];
      html += '<div class="qa-card"><div class="qa-card-header">';
      html += '<span class="badge ' + levelBadgeClass(q.level) + '">' + q.level + '</span>';
      html += '<span style="font-size:12px;color:var(--color-text-muted);">' + q.topicTitle + '</span></div>';
      html += '<div class="qa-card-body"><div class="qa-question">' + q.question + '</div>';
      if (!showA) {
        html += '<div class="qa-toggle"><button onclick="togglePracticeAnswer(\'' + q.id + '\')" class="btn btn-outline btn-sm">\u25B6 Show Answer</button></div>';
      } else {
        html += '<div class="qa-answer"><div class="qa-answer-label">Answer</div>';
        html += '<p style="font-weight:600;margin-bottom:4px;">' + q.answer + '</p>';
        html += '<p style="opacity:0.8;">' + q.explanation + '</p></div>';
      }
      html += '</div></div>';
    });
    if (filtered.length === 0) {
      html += '<div class="card" style="text-align:center;padding:40px 20px;color:var(--color-text-muted);">No questions match the current filters.</div>';
    }
    html += '</div>';

    return html;
  }

  window.setPracticeFilter = function(field, val) {
    practiceState[field] = val;
    renderPage();
  };

  window.togglePracticeAnswer = function(id) {
    practiceState.answers[id] = !practiceState.answers[id];
    renderPage();
  };

  // ============================================
  // PAGE: Calculator (CPU Scheduling + Banker's)
  // ============================================

  var calcState = {
    tab: 'cpu',
    algo: 'fcfs',
    quantum: 2,
    processes: [
      { id: 'P1', arrivalTime: 0, burstTime: 5 },
      { id: 'P2', arrivalTime: 1, burstTime: 3 },
      { id: 'P3', arrivalTime: 2, burstTime: 1 },
      { id: 'P4', arrivalTime: 3, burstTime: 2 }
    ],
    cpuResult: null,
    bankerInput: {
      processes: ['P0', 'P1', 'P2', 'P3', 'P4'],
      resources: ['A', 'B', 'C'],
      allocation: [[1, 1, 1], [2, 0, 0], [3, 1, 1], [1, 3, 2], [0, 0, 2]],
      maximum: [[6, 4, 3], [4, 2, 2], [7, 3, 2], [3, 4, 3], [5, 2, 4]],
      available: [2, 2, 1]
    },
    bankerResult: null
  };

  function renderCalculatorPage() {
    var html = '';
    html += '<div class="page-header"><h1 class="page-title">Calculators</h1></div>';

    // Tab buttons
    html += '<div class="card" style="margin-bottom:16px;"><div class="btn-group">';
    html += '<button onclick="setCalcTab(\'cpu\')" class="btn ' + (calcState.tab === 'cpu' ? 'btn-primary' : 'btn-outline') + '">CPU Scheduling</button>';
    html += '<button onclick="setCalcTab(\'banker\')" class="btn ' + (calcState.tab === 'banker' ? 'btn-primary' : 'btn-outline') + '">Banker\'s Algorithm</button>';
    html += '</div></div>';

    if (calcState.tab === 'banker') {
      html += renderBankerTab();
    } else {
      html += renderCPUTab();
    }

    return html;
  }

  function renderCPUTab() {
    var html = '';

    // Algorithm selection
    html += '<div class="card" style="margin-bottom:16px;"><div class="btn-group" style="margin-bottom:14px;">';
    [['fcfs', 'FCFS'], ['sjf', 'SJN/SRTF'], ['rr', 'Round Robin']].forEach(function(opt) {
      html += '<button onclick="setCalcAlgo(\'' + opt[0] + '\')" class="filter-btn' + (calcState.algo === opt[0] ? ' active' : '') + '">' + opt[1] + '</button>';
    });
    html += '</div>';
    if (calcState.algo === 'rr') {
      html += '<div style="display:flex;align-items:center;gap:8px;margin-top:10px;"><label style="font-size:13px;font-weight:600;">Time Quantum:</label>';
      html += '<input type="number" value="' + calcState.quantum + '" onchange="setCalcQuantum(this.value)" min="1" /></div>';
    }
    html += '</div>';

    // Process table
    html += '<div class="card"><div class="card-title">Process Table</div><div class="table-scroll"><table class="data-table"><thead><tr>';
    html += '<th>Process</th><th>Arrival Time</th><th>Burst Time</th><th></th></tr></thead><tbody>';
    calcState.processes.forEach(function(p, i) {
      html += '<tr><td style="font-weight:600;">' + p.id + '</td>';
      html += '<td><input type="number" value="' + p.arrivalTime + '" onchange="updateProcess(' + i + ',\'arrivalTime\',this.value)" min="0" /></td>';
      html += '<td><input type="number" value="' + p.burstTime + '" onchange="updateProcess(' + i + ',\'burstTime\',this.value)" min="1" /></td>';
      html += '<td><button onclick="removeProcess(' + i + ')" style="background:none;border:none;color:var(--color-red);cursor:pointer;font-size:12px;font-weight:600;">Remove</button></td></tr>';
    });
    html += '</tbody></table></div>';
    html += '<div class="btn-group" style="margin-top:12px;">';
    html += '<button onclick="addProcess()" class="btn btn-outline">+ Add Process</button>';
    html += '<button onclick="calcCPU()" class="btn btn-primary">Calculate</button>';
    html += '</div></div>';

    // Results
    if (calcState.cpuResult) {
      var r = calcState.cpuResult;
      html += '<div style="margin-top:16px;display:flex;flex-direction:column;gap:12px;">';

      // Gantt chart
      html += '<div class="card"><div class="card-title">Gantt Chart</div>';
      html += '<div style="display:flex;gap:0;overflow-x:auto;padding-bottom:4px;">';
      r.ganttChart.forEach(function(g) {
        html += '<div style="flex-shrink:0;text-align:center;"><div class="gantt-bar">' + g.processId + '</div>';
        html += '<div class="gantt-time">' + g.start + '\u2013' + g.end + '</div></div>';
      });
      html += '</div></div>';

      // Results table
      html += '<div class="card"><div class="card-title">Results</div><div class="table-scroll"><table class="data-table">';
      html += '<thead><tr><th>Process</th><th>Completion</th><th>Turnaround</th><th>Waiting</th></tr></thead><tbody>';
      calcState.processes.forEach(function(p) {
        html += '<tr><td style="font-weight:600;">' + p.id + '</td>';
        html += '<td>' + r.completionTime[p.id] + '</td>';
        html += '<td>' + r.turnaroundTime[p.id] + '</td>';
        html += '<td>' + r.waitingTime[p.id] + '</td></tr>';
      });
      html += '</tbody><tfoot><tr><td style="font-weight:700;">Average</td><td></td>';
      html += '<td style="font-weight:700;color:var(--color-primary);">' + r.avgTurnaroundTime.toFixed(2) + '</td>';
      html += '<td style="font-weight:700;color:var(--color-primary);">' + r.avgWaitingTime.toFixed(2) + '</td></tr></tfoot></table></div></div>';

      // Steps
      html += '<div class="card"><div class="card-title">Calculation Steps (Hinglish)</div>';
      html += '<div style="font-size:13px;line-height:1.7;color:var(--color-text-secondary);">';
      r.ganttChart.forEach(function(g, i) {
        html += '<div style="margin-bottom:4px;"><strong style="color:var(--color-text);">' + g.processId + '</strong> ';
        html += i === 0 ? 'sabse pehle execute hua' : 'iske baad execute hua';
        html += ' | Time: ' + g.start + ' se ' + g.end + ' | Duration: ' + (g.end - g.start) + ' units</div>';
      });
      html += '<div style="margin-top:8px;font-weight:600;color:var(--color-text);">Avg TAT = ' + r.avgTurnaroundTime.toFixed(2) + ' &nbsp;|&nbsp; Avg WT = ' + r.avgWaitingTime.toFixed(2) + '</div>';
      html += '</div></div>';

      html += '</div>';
    }

    return html;
  }

  function renderBankerTab() {
    var bi = calcState.bankerInput;
    var html = '';

    html += '<div class="info-amber" style="margin-bottom:16px;"><strong>Banker\'s Algorithm Practice</strong> \u2014 Based on 2025-26 PYQ Q8. Enter matrices and solve.</div>';

    // Input matrices
    html += '<div class="card"><div class="table-scroll">';

    // Allocation matrix
    html += '<div style="margin-bottom:16px;"><div style="font-size:13px;font-weight:700;margin-bottom:8px;">Allocation Matrix</div>';
    html += '<table class="data-table"><thead><tr><th>Process</th>';
    bi.resources.forEach(function(r) { html += '<th>' + r + '</th>'; });
    html += '</tr></thead><tbody>';
    bi.allocation.forEach(function(row, i) {
      html += '<tr><td style="font-weight:600;">' + bi.processes[i] + '</td>';
      row.forEach(function(v, j) {
        html += '<td><input type="number" value="' + v + '" onchange="updateBankerAlloc(' + i + ',' + j + ',this.value)" min="0" /></td>';
      });
      html += '</tr>';
    });
    html += '</tbody></table></div>';

    // Maximum matrix
    html += '<div style="margin-bottom:16px;"><div style="font-size:13px;font-weight:700;margin-bottom:8px;">Maximum Matrix</div>';
    html += '<table class="data-table"><thead><tr><th>Process</th>';
    bi.resources.forEach(function(r) { html += '<th>' + r + '</th>'; });
    html += '</tr></thead><tbody>';
    bi.maximum.forEach(function(row, i) {
      html += '<tr><td style="font-weight:600;">' + bi.processes[i] + '</td>';
      row.forEach(function(v, j) {
        html += '<td><input type="number" value="' + v + '" onchange="updateBankerMax(' + i + ',' + j + ',this.value)" min="0" /></td>';
      });
      html += '</tr>';
    });
    html += '</tbody></table></div>';

    // Available resources
    html += '<div style="margin-bottom:16px;"><div style="font-size:13px;font-weight:700;margin-bottom:8px;">Available Resources</div>';
    html += '<div style="display:flex;gap:12px;">';
    bi.available.forEach(function(v, j) {
      html += '<div style="display:flex;align-items:center;gap:4px;"><span style="font-size:13px;font-weight:600;">' + bi.resources[j] + ':</span>';
      html += '<input type="number" value="' + v + '" onchange="updateBankerAvail(' + j + ',this.value)" min="0" /></div>';
    });
    html += '</div></div>';

    html += '<button onclick="calcBanker()" class="btn btn-primary">Solve (Banker\'s Algorithm)</button>';
    html += '</div></div>';

    // Results
    if (calcState.bankerResult) {
      var res = calcState.bankerResult;
      html += '<div style="margin-top:16px;display:flex;flex-direction:column;gap:12px;">';

      // Need matrix
      html += '<div class="card"><div class="card-title">Need Matrix (Maximum \u2212 Allocation)</div><div class="table-scroll">';
      html += '<table class="data-table"><thead><tr><th>Process</th>';
      bi.resources.forEach(function(r) { html += '<th>' + r + '</th>'; });
      html += '</tr></thead><tbody>';
      res.needMatrix.forEach(function(row, i) {
        html += '<tr><td style="font-weight:600;">' + bi.processes[i] + '</td>';
        row.forEach(function(v) { html += '<td>' + v + '</td>'; });
        html += '</tr>';
      });
      html += '</tbody></table></div></div>';

      // Safe/Unsafe
      var bgStyle = res.safe ? 'background:var(--color-green-light);border-color:#bbf7d0;' : 'background:var(--color-red-light);border-color:#fecaca;';
      var textColor = res.safe ? 'color:var(--color-green);' : 'color:var(--color-red);';
      html += '<div class="card" style="' + bgStyle + '">';
      html += '<div style="font-size:15px;font-weight:700;' + textColor + 'margin-bottom:4px;">';
      html += res.safe ? '\u2713 System is in SAFE State' : '\u2717 System is in UNSAFE State</div>';
      if (res.safeSequence) html += '<div style="font-size:13px;font-weight:600;">Safe Sequence: ' + res.safeSequence.join(' \u2192 ') + '</div>';
      html += '</div>';

      // Steps
      html += '<div class="card"><div class="card-title">Step-by-Step Explanation</div>';
      html += '<div style="display:flex;flex-direction:column;gap:8px;">';
      res.steps.filter(function(s) { return s.canAllocate; }).forEach(function(step) {
        html += '<div style="background:var(--color-green-light);border:1px solid #bbf7d0;border-radius:var(--radius-sm);padding:10px 14px;font-size:13px;">';
        html += '<div style="font-weight:600;margin-bottom:2px;">' + step.process + ' \u2014 can be allocated</div>';
        html += '<div style="color:var(--color-text-secondary);">Available: [' + step.available.join(', ') + '] | Need: [' + step.need.join(', ') + ']</div>';
        if (step.newAvailable) {
          html += '<div style="color:var(--color-text-secondary);">After completion: New Available = [' + step.newAvailable.join(', ') + ']</div>';
        }
        html += '</div>';
      });
      html += '</div></div>';

      html += '</div>';
    }

    return html;
  }

  window.setCalcTab = function(tab) { calcState.tab = tab; renderPage(); };
  window.setCalcAlgo = function(algo) { calcState.algo = algo; renderPage(); };
  window.setCalcQuantum = function(val) { calcState.quantum = parseInt(val) || 2; };
  window.updateProcess = function(idx, field, val) { calcState.processes[idx][field] = parseInt(val) || 0; };
  window.addProcess = function() {
    calcState.processes.push({ id: 'P' + (calcState.processes.length + 1), arrivalTime: 0, burstTime: 1 });
    renderPage();
  };
  window.removeProcess = function(idx) {
    calcState.processes.splice(idx, 1);
    renderPage();
  };
  window.calcCPU = function() {
    if (calcState.algo === 'fcfs') calcState.cpuResult = fcfs(calcState.processes);
    else if (calcState.algo === 'sjf') calcState.cpuResult = sjf(calcState.processes);
    else if (calcState.algo === 'rr') calcState.cpuResult = roundRobin(calcState.processes, calcState.quantum);
    renderPage();
  };

  window.updateBankerAlloc = function(i, j, v) { calcState.bankerInput.allocation[i][j] = parseInt(v) || 0; };
  window.updateBankerMax = function(i, j, v) { calcState.bankerInput.maximum[i][j] = parseInt(v) || 0; };
  window.updateBankerAvail = function(j, v) { calcState.bankerInput.available[j] = parseInt(v) || 0; };
  window.calcBanker = function() {
    calcState.bankerResult = bankersAlgorithm(calcState.bankerInput);
    renderPage();
  };

  // ============================================
  // PAGE: ExamMode
  // ============================================

  var examState = {
    started: false,
    current: 0,
    showAnswer: {},
    done: false,
    questions: [
      { id: 'eq-1', section: 'A', q: 'Write short notes on: (a) Critical Section (b) Virtual Memory (c) Real-Time Systems', marks: '3', answer: '(a) Critical Section: Wo code part jahan shared resource access hoti hai. Sirf ek process at a time. (b) Virtual Memory: Logical memory ko physical memory se alag treat karna. Processes bada address space use kar sakte hain. (c) Real-Time Systems: Guaranteed time ke andar response dena hota hai. Hard (strict) aur Soft (flexible) types.' },
      { id: 'eq-2', section: 'A', q: 'Explain the four necessary conditions for deadlock.', marks: '5', answer: '(1) Mutual Exclusion: Resource ek time pe sirf ek process use kar sakti hai. (2) Hold and Wait: Process resource hold karti hai aur doosri ka wait karti hai. (3) No Preemption: Resource forcefully wapas nahi le sakte. (4) Circular Wait: Process chain bana ke wait karti hai.' },
      { id: 'eq-3', section: 'A', q: 'Compare preemptive and non-preemptive scheduling.', marks: '5', answer: 'Preemptive: CPU forcefully le sakti hai process se. Example: Round Robin, SRTF. Better response time. Non-Preemptive: Process jab CPU chhode tabhi milegi doosri ko. Example: FCFS, SJF. Less overhead but poor response.' },
      { id: 'eq-4', section: 'B', q: 'Solve: P1(0,6), P2(1,4), P3(2,2), P4(3,3) using Round Robin (Q=2). Calculate avg TAT and WT.', marks: '5', answer: 'Gantt: P1(0-2), P2(2-4), P3(4-6), P1(6-8), P4(8-10), P2(10-11), P1(11-13). CT: P1=13,P2=11,P3=6,P4=10. TAT: P1=13,P2=10,P3=4,P4=7. Avg TAT=8.5, Avg WT=5.5.' },
      { id: 'eq-5', section: 'B', q: 'Explain Producer-Consumer problem using semaphores. Write pseudocode.', marks: '5', answer: 'Three semaphores: mutex=1, empty=n, full=0. Producer: wait(empty), wait(mutex), produce, signal(mutex), signal(full). Consumer: wait(full), wait(mutex), consume, signal(mutex), signal(empty).' },
      { id: 'eq-6', section: 'B', q: 'What is paging? Explain page table and address translation.', marks: '5', answer: 'Paging: Logical address ko fixed-size blocks (pages) mein divide karna. Physical memory ko frames mein divide karta hai. Page table maps page number to frame number. Address = (page number, offset).' }
    ]
  };

  function renderExamMode() {
    var sectionA = examState.questions.filter(function(q) { return q.section === 'A'; });
    var sectionB = examState.questions.filter(function(q) { return q.section === 'B'; });

    if (!examState.started) {
      var html = '';
      html += '<div class="exam-start-container"><h1 class="page-title" style="text-align:center;margin-bottom:20px;">Exam Mode</h1>';
      html += '<div class="card" style="padding:36px 28px;">';
      html += '<div style="font-size:40px;margin-bottom:16px;">\u{1F3AF}</div>';
      html += '<h2 style="font-size:18px;font-weight:700;margin-bottom:8px;">Mock Exam</h2>';
      html += '<p style="font-size:14px;color:var(--color-text-secondary);margin-bottom:16px;">Based on observed paper pattern.</p>';
      html += '<div style="display:flex;justify-content:center;gap:8px;margin-bottom:16px;">';
      html += '<span class="badge badge-blue">Section A: ' + sectionA.length + ' \u00D7 3 marks</span>';
      html += '<span class="badge badge-indigo">Section B: ' + sectionB.length + ' \u00D7 5 marks</span></div>';
      html += '<p style="font-size:12px;color:var(--color-amber);margin-bottom:20px;">Practice questions, NOT actual university questions.</p>';
      html += '<button onclick="startExam()" class="btn btn-primary" style="padding:10px 32px;font-size:14px;">Start Exam</button>';
      html += '</div></div>';
      return html;
    }

    if (examState.done) {
      var html = '';
      html += '<div class="exam-start-container"><h1 class="page-title" style="text-align:center;margin-bottom:20px;">Exam Complete</h1>';
      html += '<div class="card" style="padding:36px 28px;">';
      html += '<div style="font-size:40px;margin-bottom:12px;">\u2705</div>';
      html += '<h2 style="font-size:18px;font-weight:700;margin-bottom:8px;">All ' + examState.questions.length + ' questions reviewed</h2>';
      html += '<p style="font-size:14px;color:var(--color-text-secondary);margin-bottom:20px;">Total Marks: ' + (sectionA.length * 3 + sectionB.length * 5) + '</p>';
      html += '<button onclick="retryExam()" class="btn btn-outline">Retry</button>';
      html += '</div></div>';
      return html;
    }

    var q = examState.questions[examState.current];
    var html = '';
    html += '<div class="exam-container">';
    html += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">';
    html += '<h1 class="page-title" style="margin-bottom:0;">Question ' + (examState.current + 1) + '/' + examState.questions.length + '</h1>';
    html += '<div style="display:flex;gap:6px;">';
    html += '<span class="badge badge-slate">Section ' + q.section + '</span>';
    html += '<span class="badge badge-blue">' + q.marks + ' marks</span></div></div>';

    html += '<div class="progress-track" style="margin-bottom:20px;">';
    html += '<div class="progress-fill" style="width:' + ((examState.current + 1) / examState.questions.length * 100) + '%;"></div></div>';

    html += '<div class="qa-card"><div class="qa-card-header"><span class="badge badge-blue">Question ' + (examState.current + 1) + '</span></div>';
    html += '<div class="qa-card-body"><div class="qa-question" style="font-size:15px;line-height:1.7;margin-bottom:14px;">' + q.q + '</div>';
    if (!examState.showAnswer[q.id]) {
      html += '<button onclick="showExamAnswer(\'' + q.id + '\')" class="btn btn-outline btn-sm">\u25B6 Reveal Answer</button>';
    } else {
      html += '<div class="qa-answer"><div class="qa-answer-label">Answer</div><p>' + q.answer + '</p></div>';
    }
    html += '</div></div>';

    html += '<div style="display:flex;justify-content:space-between;margin-top:16px;padding-bottom:24px;">';
    html += '<button onclick="prevExamQuestion()" class="btn btn-outline" style="opacity:' + (examState.current === 0 ? '0.4' : '1') + ';" ' + (examState.current === 0 ? 'disabled' : '') + '>\u2190 Previous</button>';
    if (examState.current < examState.questions.length - 1) {
      html += '<button onclick="nextExamQuestion()" class="btn btn-primary">Next \u2192</button>';
    } else {
      html += '<button onclick="finishExam()" class="btn btn-primary" style="background:var(--color-green);border-color:var(--color-green);">Finish \u2713</button>';
    }
    html += '</div></div>';

    return html;
  }

  window.startExam = function() { examState.started = true; examState.done = false; examState.current = 0; examState.showAnswer = {}; renderPage(); };
  window.retryExam = function() { examState.started = false; examState.done = false; examState.current = 0; examState.showAnswer = {}; renderPage(); };
  window.showExamAnswer = function(id) { examState.showAnswer[id] = true; renderPage(); };
  window.prevExamQuestion = function() { if (examState.current > 0) { examState.current--; renderPage(); } };
  window.nextExamQuestion = function() { if (examState.current < examState.questions.length - 1) { examState.current++; renderPage(); } };
  window.finishExam = function() { examState.done = true; renderPage(); };

  // ============================================
  // PAGE: QuickRevision
  // ============================================

  function renderQuickRevision() {
    var html = '';
    html += '<div class="page-header"><h1 class="page-title">Quick Revision</h1>';
    html += '<p class="page-subtitle">30-second revision for every topic. Key definitions, formulas, and concepts.</p></div>';

    html += '<div style="display:flex;flex-direction:column;gap:8px;">';
    syllabus.forEach(function(t) {
      html += '<a href="#/topic/' + t.id + '" class="link-card"><div style="display:flex;align-items:flex-start;gap:10px;flex:1;min-width:0;">';
      html += '<span style="font-size:14px;margin-top:1px;flex-shrink:0;">';
      if (t.priority === 'very-high') html += '\u{1F525}';
      else if (t.priority === 'high') html += '\u{1F7E0}';
      else html += '\u25CB';
      html += '</span>';
      html += '<div style="flex:1;min-width:0;"><div style="font-size:14px;font-weight:600;color:var(--color-text);margin-bottom:2px;">' + t.title + '</div>';
      html += '<div style="font-size:12px;color:var(--color-text-muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">' + t.quickRevision + '</div></div></div>';
      if (t.pyqStatus === 'repeated') html += '<span class="badge badge-red" style="flex-shrink:0;">R</span>';
      html += '</a>';
    });
    html += '</div>';

    return html;
  }

  // ============================================
  // MAIN ROUTER
  // ============================================

  function renderPage() {
    var route = getRoute();
    var html = '';

    if (route === '/' || route === '') {
      html = renderDashboard();
    } else if (route === '/syllabus') {
      html = renderSyllabus();
    } else if (route.startsWith('/topic/')) {
      var topicId = route.replace('/topic/', '');
      html = renderTopicPage(topicId);
    } else if (route === '/pyqs') {
      html = renderPYQPage();
    } else if (route === '/important') {
      html = renderImportantTopics();
    } else if (route === '/predictions') {
      html = renderPredictionsPage();
    } else if (route === '/practice') {
      html = renderPracticePage();
    } else if (route === '/calculator') {
      html = renderCalculatorPage();
    } else if (route === '/exam') {
      html = renderExamMode();
    } else if (route === '/revision') {
      html = renderQuickRevision();
    } else {
      html = '<div style="text-align:center;padding:60px 20px;"><h2 style="font-size:18px;font-weight:600;">Page not found</h2><a href="#/" style="color:var(--color-primary);">Go to Dashboard</a></div>';
    }

    mainContent.innerHTML = html;
    mainContent.classList.remove('fade-in');
    void mainContent.offsetWidth;
    mainContent.classList.add('fade-in');

    updateActiveNav();
    updateHeaderProgress();
    closeMobileSidebar();
    window.scrollTo(0, 0);
  }

  // ============================================
  // EVENT LISTENERS
  // ============================================

  mobileMenuBtn.addEventListener('click', openMobileSidebar);
  window.addEventListener('hashchange', renderPage);

  // Close sidebar on nav click (mobile)
  sidebar.querySelectorAll('.nav-item').forEach(function(item) {
    item.addEventListener('click', closeMobileSidebar);
  });

  // ============================================
  // INIT
  // ============================================

  renderPage();

})();
