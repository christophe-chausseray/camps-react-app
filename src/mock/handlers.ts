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
        ],
      }),
    );

    return response;
  }),
];

export { handlers }
