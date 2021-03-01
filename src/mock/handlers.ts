import { graphql, GraphQLMockedContext, GraphQLMockedRequest, ResponseComposition } from 'msw';
import { v4 as uuidv4 } from 'uuid';
import { Comment } from '../common';
//import { Comment as CommentType } from '../common';

type NewComments = {
  [campingId: string]: Comment[];
};

const newComments: NewComments = {};

const FAKE_DATA = {
  campings: [
    {
      id: uuidv4(),
      name: 'CAMPING HUTTOPIA RAMBOUILLET',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan ut eros non mollis. Suspendisse sem risus, dignissim eu velit id, pulvinar viverra libero. Praesent vulputate risus in urna blandit, eget feugiat augue porttitor. In lobortis, neque nec fringilla efficitur, enim orci efficitur turpis, fermentum mattis purus massa sit amet nibh. Phasellus iaculis commodo neque, et bibendum augue aliquam eget. Donec eu vestibulum leo. Donec massa ligula, viverra nec tempor eu, tristique nec arcu. Suspendisse et accumsan tellus, eget facilisis ligula. Morbi gravida eleifend orci, vel sagittis metus accumsan sollicitudin. Sed luctus congue ligula, eu blandit arcu tincidunt nec. Etiam vitae molestie elit.',
      image:
        'https://media.istockphoto.com/photos/camping-tent-in-a-camping-in-a-forest-by-the-river-picture-id911995140?k=6&m=911995140&s=612x612&w=0&h=U-yG-2eR8pOxLX_G8Eg9fDI1SOWYifxbb4BiiOhNNiI=',
      address: "Route du Château d'eau",
      zipcode: 78120,
      city: 'RAMBOUILLET',
      nb_spots: 20,
      nb_stars: 3,
      phone_number: '168403928',
      email: 'contact@le-camping-huttopia.com',
      website: 'le-camping-huttopia.com',
      location: {
        latitude: 48.630059,
        longitude: 1.835694,
      },
      comments: [
        {
          id: uuidv4(),
          title: 'An amazing title',
          description: 'The camping is amazing !',
          author: 'chris',
        },
        {
          id: uuidv4(),
          title: 'A beutiful camping',
          description: 'The location is perfect !',
          author: 'ben',
        },
      ],
    },
    {
      id: uuidv4(),
      name: 'CARAVANING LE VAUVERT',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan ut eros non mollis. Suspendisse sem risus, dignissim eu velit id, pulvinar viverra libero. Praesent vulputate risus in urna blandit, eget feugiat augue porttitor. In lobortis, neque nec fringilla efficitur, enim orci efficitur turpis, fermentum mattis purus massa sit amet nibh. Phasellus iaculis commodo neque, et bibendum augue aliquam eget. Donec eu vestibulum leo. Donec massa ligula, viverra nec tempor eu, tristique nec arcu. Suspendisse et accumsan tellus, eget facilisis ligula. Morbi gravida eleifend orci, vel sagittis metus accumsan sollicitudin. Sed luctus congue ligula, eu blandit arcu tincidunt nec. Etiam vitae molestie elit.',
      image:
        'https://media.istockphoto.com/photos/camping-tent-in-a-camping-in-a-forest-by-the-river-picture-id911995140?k=6&m=911995140&s=612x612&w=0&h=U-yG-2eR8pOxLX_G8Eg9fDI1SOWYifxbb4BiiOhNNiI=',
      address: '26 Route de Vauvert',
      zipcode: 91150,
      city: 'ORMOY-LA-RIVIÈRE',
      nb_spots: 230,
      nb_stars: 4,
      phone_number: '164942139',
      email: 'contact@camping-le-vauvert.com',
      website: 'camping-le-vauvert.com',
      location: {
        latitude: 48.411278,
        longitude: 2.143939,
      },
      comments: [],
    },
  ],
};

const handlers = [
  // Handles a "listCampingItems" query
  graphql.query(
    'ListCampingItems',
    (req: GraphQLMockedRequest, res: ResponseComposition, context: GraphQLMockedContext<any>) => {
      const response = res(
        context.data({
          campings: [
            {
              id: FAKE_DATA.campings[0].id,
              name: FAKE_DATA.campings[0].name,
              location: FAKE_DATA.campings[0].location,
            },
            {
              id: FAKE_DATA.campings[1].id,
              name: FAKE_DATA.campings[1].name,
              location: FAKE_DATA.campings[1].location,
            },
          ],
        })
      );

      return response;
    }
  ),
  // Handles a "DetailCampingItem" query
  graphql.query(
    'DetailCampingItem',
    (req: GraphQLMockedRequest, res: ResponseComposition, context: GraphQLMockedContext<any>) => {
      const { campingId } = req.variables;
      const camping = FAKE_DATA.campings.find((camping) => campingId === camping.id);

      if (undefined === camping) {
        return res(
          context.status(403),
          context.data({
            errorMessage: `Camping '${campingId}' not found`,
          })
        );
      }

      const response = res(
        context.data({
          camping: {
            id: camping.id,
            name: camping.name,
            description: camping.description,
            image: camping.image,
            address: camping.address,
            zipcode: camping.zipcode,
            city: camping.city,
            nb_spots: camping.nb_spots,
            nb_stars: camping.nb_stars,
            phone_number: camping.phone_number,
            email: camping.email,
            website: camping.website,
          },
        })
      );

      return response;
    }
  ),
  // Handles a "ListCommentsByCamping" query
  graphql.query(
    'ListCommentsByCamping',
    (req: GraphQLMockedRequest, res: ResponseComposition, context: GraphQLMockedContext<any>) => {
      const { campingId } = req.variables;
      const camping = FAKE_DATA.campings.find((camping) => campingId === camping.id);
      const commentsAdded =
        null !== sessionStorage.getItem('newComments') &&
        undefined !== JSON.parse(sessionStorage.getItem('newComments') as string)[campingId]
          ? JSON.parse(sessionStorage.getItem('newComments') as string)[campingId]
          : null;
      if (undefined === camping) {
        return res(
          context.status(403),
          context.data({
            errorMessage: `Camping '${campingId}' not found`,
          })
        );
      }

      if (null === commentsAdded) {
        return res(
          context.data({
            comments: camping.comments,
          })
        );
      }

      return res(
        context.data({
          comments: [...camping.comments, ...commentsAdded],
        })
      );
    }
  ),
  // Handles a "AddCommentForCamping" query
  graphql.mutation(
    'AddCommentForCamping',
    (req: GraphQLMockedRequest, res: ResponseComposition, context: GraphQLMockedContext<any>) => {
      const { campingId, commentInput } = req.variables;
      const newComment = {
        id: uuidv4(),
        title: commentInput.title,
        description: commentInput.description,
        author: commentInput.author,
      };

      if (!newComments.hasOwnProperty(campingId)) {
        newComments[campingId] = [];
      }
      newComments[campingId].push(newComment);
      sessionStorage.setItem('newComments', JSON.stringify(newComments));

      const response = res(
        context.data({
          addComment: newComment,
        })
      );

      return response;
    }
  ),
];

export { handlers, FAKE_DATA };
