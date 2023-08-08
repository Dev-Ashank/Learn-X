import { Test, TestingModule } from '@nestjs/testing';
import { CourseCatalogService } from './course-catalog.service';

describe('CourseCatalogService', () => {
  let service: CourseCatalogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseCatalogService],
    }).compile();

    service = module.get<CourseCatalogService>(CourseCatalogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
