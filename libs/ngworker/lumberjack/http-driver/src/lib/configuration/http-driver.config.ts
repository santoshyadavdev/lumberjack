import { LogDriverConfig } from '@ngworker/lumberjack';

import { HttpDriverRetryOptions } from './http-driver-retry.options';

export interface HttpDriverConfig extends LogDriverConfig {
  /**
   *
   * The identifier of the app who emitted the log.
   * This is used to organize logs on the log store.
   *
   */
  readonly origin: string;
  /**
   *
   * The url of the log store endpoint.
   *
   * The endpoint matching this url MUST support the POST method.
   */
  readonly storeUrl: string;
  /**
   *
   * The desired retry behavior options on failed requests
   *
   */
  readonly retryOptions: HttpDriverRetryOptions;
}
