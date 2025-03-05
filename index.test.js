const  { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles 00 - 8:00', () => {
    const timeInWords = convertTimeToWords('8:00');
    expect(timeInWords).toBe('eight o\'clock');
  });
  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles minutes before 30 - 8:17', () => {
    const timeInWords = convertTimeToWords('8:17');
    expect(timeInWords).toBe('seventeen past eight');
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });

  it('Handles minutes after 30 - 8:41', () => {
    const timeInWords = convertTimeToWords('8:41');
    expect(timeInWords).toBe('nineteen to nine');
  });
});
