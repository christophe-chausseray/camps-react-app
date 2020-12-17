import { graphql, GraphQLMockedContext, GraphQLMockedRequest, ResponseComposition } from 'msw';

const handlers = [
  // Handles a "listCampings" query
  graphql.query('listCampings', (req: GraphQLMockedRequest, res: ResponseComposition, context: GraphQLMockedContext<any>) => {
    const response = res(
      context.data({
        campings: [
          {
            name: 'CAMPING HUTTOPIA RAMBOUILLET',
            address: "Route du Château d'eau",
            city: 'RAMBOUILLET',
            location: {
              latitude: 48.630059,
              longitude: 1.835694,
            }
          },
          {
            name: 'CARAVANING LE VAUVERT',
            address: '26 Route de Vauvert',
            city: 'ORMOY-LA-RIVIÈRE',
            location: {
              latitude: 48.411278,
              longitude: 2.143939,
            }
          }
        ],
      }),
    );

    return response;
  }),
];

export { handlers }
