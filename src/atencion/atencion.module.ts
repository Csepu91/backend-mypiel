import { Module } from '@nestjs/common';
import { AtencionService } from './atencion.service';

@Module({
  providers: [AtencionService]
})
export class AtencionModule {}
