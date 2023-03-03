import { Controller, Get } from '@nestjs/common';
import { CpuService } from '../cpu/cpu.service';
import { DiskService } from '../disk/disk.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private readonly cpuService: CpuService,
    private readonly diskService: DiskService
  ) {}

  @Get()
  run() {
    return {
      cpu: this.cpuService.compute(1,2),
      disk: this.diskService.getData()
    }
  }
}
