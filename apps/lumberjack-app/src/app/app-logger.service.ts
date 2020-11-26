import { Injectable } from '@angular/core';

import { LumberjackLogger, LumberjackService } from '@ngworker/lumberjack';
import { LumberjackTimeService } from '@ngworker/lumberjack/testing';

@Injectable({
  providedIn: 'root',
})
export class AppLogger extends LumberjackLogger {
  private static logContext = 'Forest App';

  constructor(lumberjack: LumberjackService, time: LumberjackTimeService) {
    super(lumberjack, time);
  }

  forestOnFire = this.createCriticalLogger('The forest is on fire', AppLogger.logContext);

  helloForest = this.createInfoLogger('HelloForest', AppLogger.logContext);
}
