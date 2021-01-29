import { renderHookWithProviders } from '../../../utilTests';
import { useCampingDetail } from '../useCampingDetail';

describe('Hook useCampingDetail', () => {
  /** @todo need to find why it gets the mock response after the assertion */
  it.skip('get the detail of a camping item', async () => {
    const campingId = 'bccb351c-e447-4683-acf6-6c9be9a407cb';

    const { result, waitForNextUpdate } = renderHookWithProviders(() => useCampingDetail(campingId));

    await waitForNextUpdate();

    expect(result.current.campingItem).toEqual({
      id: 'bccb351c-e447-4683-acf6-6c9be9a407cb',
      name: 'CAMPING HUTTOPIA RAMBOUILLET',
      description: 'Description camping huttopia',
      image: '/path/to/camping-uttopia.png',
      address: "Route du Château d'eau",
      zipcode: 78120,
      city: 'RAMBOUILLET',
      longitude: 48.630059,
      latitude: 1.835694,
      nb_spots: 20,
      nb_stars: 3,
      phone_number: '168403928',
      email: 'contact@le-camping-huttopia.com',
      website: 'le-camping-huttopia.com',
    });
  });
})
