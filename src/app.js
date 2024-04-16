//NOTE - Testing - TESTING - TESTING - TESTING - TESTING
// this file suggests different testing methods.Run:
// 'node app.js' to view.

// Example 1: console.log
// ======================
console.log("I am a regular console log.");
console.group();
console.log("I am a console log indented by a single level");
console.group();
console.log("I am a multilevel nested console log");
console.groupEnd();
console.groupEnd();

// Example 2: console.table
// ========================
const people = [
	["John", "Smith"],
	["Jane", "Doe"],
	["Emily", "Jones"],
];
console.table(people);

// Example 3: console.dir
// ======================
const object = {
	name: "Lou",
	likes: ["JavaScript", "Node.js"],
};
console.dir(process, { colors: true, depth: 0 });

/*REVIEW -
I am a regular console log.
  I am a console log indented by a single level
    I am a multilevel nested console log
┌─────────┬─────────┬─────────┐
│ (index) │ 0       │ 1       │
├─────────┼─────────┼─────────┤
│ 0       │ 'John'  │ 'Smith' │
│ 1       │ 'Jane'  │ 'Doe'   │
│ 2       │ 'Emily' │ 'Jones' │
└─────────┴─────────┴─────────┘
process {
  version: 'v21.6.2',
  versions: [Object],
  arch: 'arm64',
  platform: 'darwin',
  release: [Object],
  _rawDebug: [Function: _rawDebug],
  moduleLoadList: [Array],
  binding: [Function: binding],
  _linkedBinding: [Function: _linkedBinding],
  _events: [Object: null prototype],
  _eventsCount: 5,
  _maxListeners: undefined,
  domain: null,
  _exiting: [Getter/Setter],
  exitCode: [Getter/Setter],
  config: [Object],
  dlopen: [Function: dlopen],
  uptime: [Function: uptime],
  _getActiveRequests: [Function: _getActiveRequests],
  _getActiveHandles: [Function: _getActiveHandles],
  getActiveResourcesInfo: [Function: getActiveResourcesInfo],
  reallyExit: [Function: reallyExit],
  _kill: [Function: _kill],
  cpuUsage: [Function: cpuUsage],
  resourceUsage: [Function: resourceUsage],
  memoryUsage: [Function],
  constrainedMemory: [Function: constrainedMemory],
  kill: [Function: kill],
  exit: [Function: exit],
  hrtime: [Function],
  openStdin: [Function (anonymous)],
  getuid: [Function: getuid],
  geteuid: [Function: geteuid],
  getgid: [Function: getgid],
  getegid: [Function: getegid],
  getgroups: [Function: getgroups],
  allowedNodeEnvironmentFlags: [Getter/Setter],
  assert: [Function: deprecated],
  features: [Object],
  _fatalException: [Function (anonymous)],
  setUncaughtExceptionCaptureCallback: [Function: setUncaughtExceptionCaptureCallback],
  hasUncaughtExceptionCaptureCallback: [Function: hasUncaughtExceptionCaptureCallback],
  emitWarning: [Function: emitWarning],
  nextTick: [Function: nextTick],
  _tickCallback: [Function: runNextTicks],
  sourceMapsEnabled: [Getter],
  setSourceMapsEnabled: [Function: setSourceMapsEnabled],
  _debugProcess: [Function: _debugProcess],
  _debugEnd: [Function: _debugEnd],
  _startProfilerIdleNotifier: [Function (anonymous)],
  _stopProfilerIdleNotifier: [Function (anonymous)],
  stdout: [Getter],
  stdin: [Getter],
  stderr: [Getter],
  abort: [Function: abort],
  umask: [Function: wrappedUmask],
  chdir: [Function: wrappedChdir],
  cwd: [Function: wrappedCwd],
  initgroups: [Function: initgroups],
  setgroups: [Function: setgroups],
  setegid: [Function (anonymous)],
  seteuid: [Function (anonymous)],
  setgid: [Function (anonymous)],
  setuid: [Function (anonymous)],
  env: [Object],
  title: 'node',
  argv: [Array],
  execArgv: [],
  pid: 40954,
  ppid: 34352,
  execPath: '/opt/homebrew/Cellar/node/21.6.2/bin/node',
  debugPort: 9229,
  argv0: 'node',
  _preload_modules: [],
  report: [Getter],
  [Symbol(shapeMode)]: false,
  [Symbol(kCapture)]: false
}*/
