import { AgeFormatterPipe } from './age-formatter.pipe';

describe('AgeFormatterPipe', () => {
  it('create an instance', () => {
    const pipe = new AgeFormatterPipe();
    expect(pipe).toBeTruthy();
  });
});
