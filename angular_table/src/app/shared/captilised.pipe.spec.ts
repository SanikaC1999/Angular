import { CaptilisedPipe } from './captilised.pipe';

describe('CaptilisedPipe', () => {
  it('create an instance', () => {
    const pipe = new CaptilisedPipe();
    expect(pipe).toBeTruthy();
  });
});
