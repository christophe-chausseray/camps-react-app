import { useListCampingItems } from '../useListCampingItems';
import { renderHookWithProviders } from '../../../utilTests';

describe('Hook useListCampingItems', () => {
  it('get the list of camping items', async () => {
    const { result, waitForNextUpdate } = renderHookWithProviders(() => useListCampingItems());

    await waitForNextUpdate();

    expect(result.current.campingItems).toEqual([
      {
        id: expect.any(String),
        name: 'CAMPING HUTTOPIA RAMBOUILLET',
        location: {
          longitude: 1.835694,
          latitude: 48.630059,
        },
      },
      {
        id: expect.any(String),
        name: 'CARAVANING LE VAUVERT',
        location: {
          longitude: 2.143939,
          latitude: 48.411278,
        },
      },
    ]);
  });
});
