import { graphql, GraphQLMockedContext, GraphQLMockedRequest, ResponseComposition } from 'msw';

const handlers = [
  // Handles a "listCampingItems" query
  graphql.query('listCampingItems', (req: GraphQLMockedRequest, res: ResponseComposition, context: GraphQLMockedContext<any>) => {
    const response = res(
      context.data({
        campings: [
          {
            id: 'bccb351c-e447-4683-acf6-6c9be9a407cb',
            name: 'CAMPING HUTTOPIA RAMBOUILLET',
            location: {
              latitude: 48.630059,
              longitude: 1.835694,
            }
          },
          {
            id: 'f8317142-7897-42bc-8f9c-33bb5cc68eec',
            name: 'CARAVANING LE VAUVERT',
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
