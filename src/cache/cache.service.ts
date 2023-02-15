import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class CacheService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
  // o cache deve ser usado com cuidado, pois se colocar muita coisa salva na memoria, ela vai continuar
  // pesada, e não vai adiantar nada.

  async getCache<T>(
    key: string,
    functionRequest: () => Promise<T>,
  ): Promise<T> {
    const allData: T = await this.cacheManager.get(`state_${key}`);

    if (allData) {
      return allData;
    }

    const cities: T = await functionRequest();

    await this.cacheManager.set(key, cities);

    return cities;
  }
}
