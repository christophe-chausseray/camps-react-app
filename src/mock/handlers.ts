import { graphql, GraphQLMockedContext, GraphQLMockedRequest, ResponseComposition } from 'msw';

const handlers = [
  // Handles a "listCampingItems" query
  graphql.query('ListCampingItems', (req: GraphQLMockedRequest, res: ResponseComposition, context: GraphQLMockedContext<any>) => {
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
  // Handles a "DetailCampingItem" query
  graphql.query('DetailCampingItem', (req: GraphQLMockedRequest, res: ResponseComposition, context: GraphQLMockedContext<any>) => {
    const { campingId } = req.variables;
    const response = res(
      context.data({
        camping: {
          id: campingId,
          name: 'CAMPING HUTTOPIA RAMBOUILLET',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan ut eros non mollis. Suspendisse sem risus, dignissim eu velit id, pulvinar viverra libero. Praesent vulputate risus in urna blandit, eget feugiat augue porttitor. In lobortis, neque nec fringilla efficitur, enim orci efficitur turpis, fermentum mattis purus massa sit amet nibh. Phasellus iaculis commodo neque, et bibendum augue aliquam eget. Donec eu vestibulum leo. Donec massa ligula, viverra nec tempor eu, tristique nec arcu. Suspendisse et accumsan tellus, eget facilisis ligula. Morbi gravida eleifend orci, vel sagittis metus accumsan sollicitudin. Sed luctus congue ligula, eu blandit arcu tincidunt nec. Etiam vitae molestie elit.',
          image: 'https://media.istockphoto.com/photos/camping-tent-in-a-camping-in-a-forest-by-the-river-picture-id911995140?k=6&m=911995140&s=612x612&w=0&h=U-yG-2eR8pOxLX_G8Eg9fDI1SOWYifxbb4BiiOhNNiI=',
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
        },
      }),
    );

    return response;
  }),
  // Handles a "ListCommentsByCamping" query
  graphql.query('ListCommentsByCamping', (req: GraphQLMockedRequest, res: ResponseComposition, context: GraphQLMockedContext<any>) => {
    const response = res(
      context.data({
        comments: [
          {
            title: 'An amazing title',
            description: 'The camping is amazing !',
            author: 'chris'
          },
          {
            title: 'A beutiful camping',
            description: 'The location is perfect !',
            author: 'ben'
          },
        ]
      }),
    );

    return response;
  })
];

export { handlers }
