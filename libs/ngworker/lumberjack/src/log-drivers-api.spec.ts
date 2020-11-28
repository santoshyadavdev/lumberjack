import { InjectionToken } from '@angular/core';

import { LogDriver, logDriverToken } from './index';

describe('Log drivers API', () => {
  describe('Interfaces', () => {
    it('exposes LogDriver', () => {
      const value: LogDriver | undefined = undefined;

      expect(value).toBeUndefined();
    });
  });

  describe('Dependency injection tokens', () => {
    it('exposes logDriverToken', () => {
      const sut = logDriverToken;

      expect(sut).toBeInstanceOf(InjectionToken);
    });
  });
});
