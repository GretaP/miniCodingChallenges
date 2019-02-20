
/*
Codewars problem: https://www.codewars.com/kata/human-readable-time/
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

*/

/*
Codewars sample tests
describe('tests', function() {
  it('should format correctly', function() {
    Test.assertEquals(humanReadable(0), '00:00:00', 'humanReadable(0)');
    Test.assertEquals(humanReadable(59), '00:00:59', 'humanReadable(59)');
    Test.assertEquals(humanReadable(60), '00:01:00', 'humanReadable(60)');
    Test.assertEquals(humanReadable(90), '00:01:30', 'humanReadable(90)');
    Test.assertEquals(humanReadable(3599), '00:59:59', 'humanReadable(3599)');
    Test.assertEquals(humanReadable(3600), '01:00:00', 'humanReadable(3600)');
    Test.assertEquals(humanReadable(45296), '12:34:56', 'humanReadable(45296)');
    Test.assertEquals(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
    Test.assertEquals(humanReadable(86400), '24:00:00', 'humanReadable(86400)');
    Test.assertEquals(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
  });
});
*/

/*
My thoughts about this kata: I enjoyed this because I have worked with the date object in C# but not in JS.
I was quite surprised this wasn't the "normal" solution, or at least not common.
*/


function humanReadable(seconds) {
  let date = new Date(seconds*1000);
  let hours = (date.getDate()-1)*24 + date.getHours();
  return (`${hours>9 ? hours: `0${hours}`}${date.toTimeString().slice(2,8)}`);
}
