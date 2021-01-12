import { useListCampingItems } from '../useListCampingItems';
import { renderHookWithProviders } from '../../../utilTests';

describe('Hook useListCampingItems', () => {
  it('get the list of camping items', async () => {
    const { result, waitForNextUpdate } = renderHookWithProviders(() => useListCampingItems());

    await waitForNextUpdate();

    expect(result.current.campingItems).toEqual([
      {
        id: 'bccb351c-e447-4683-acf6-6c9be9a407cb',
        name: 'CAMPING HUTTOPIA RAMBOUILLET',
        location: {
          longitude: 1.835694,
          latitude: 48.630059,
        }
      },
      {
        id: 'f8317142-7897-42bc-8f9c-33bb5cc68eec',
        name: 'CARAVANING LE VAUVERT',
        location: {
          longitude: 2.143939,
          latitude: 48.411278,
        }
      }
    ]);
  });
})
