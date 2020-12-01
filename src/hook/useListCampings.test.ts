import { useListCampings } from './useListCampings';
import { renderHookWithProviders } from '../utilTests';

describe('Hook useListCampings', () => {
  it('get the list of campings', async () => {
    const { result, waitForNextUpdate } = renderHookWithProviders(() => useListCampings());

    await waitForNextUpdate();

    expect(result.current.campings).toEqual([
      {
        name: 'CAMPING HUTTOPIA RAMBOUILLET',
        address: "Route du Château d'eau",
        city: 'RAMBOUILLET',
        location: {
          longitude: 48.630059,
          latitude: 1.835694,
        }
      },
      {
        name: 'CARAVANING LE VAUVERT',
        address: '26 Route de Vauvert',
        city: 'ORMOY-LA-RIVIÈRE',
        location: {
          longitude: 48.411278,
          latitude: 2.143939,
        }
      }
    ]);
  });
})
