// fs 모듈의 readdir 함수 연습하기 ( 결과 비교 파일 : 03\results\list-2.js)
const fs = require("fs");

fs.readdir("../02", (err, files) => {
  if (err) {
    console.log(err);
  }
  console.log(files);
});

// [
//     'buffer.js',   'dir-1.js',    'dir-2.js',
//     'dir-3.js',    'dir-4.js',    'escape.js',
//     'example.txt', 'file-sol.js', 'list-1.js',
//     'list-2.js',   'list-3.js',   'myfile-1.js',
//     'myfile-2.js', 'myfile-3.js', 'path.js',
//     'pipe.js',     'quiz-1.js',   'quiz-2.js',
//     'quiz-3.js',   'read-1.js',   'read-2.js',
//     'read-3.js',   'readMe.txt',  'results',
//     'sol-1.js',    'sol-2.js',    'sol-3.js',
//     'stream-1.js', 'stream-2.js', 'unlink-1.js',
//     'unlink-2.js', 'unlink-3.js', 'write-1.js',
//     'write-2.js',  'write-3.js',  'write-4.js',
//     'write-5.js'
//   ]
