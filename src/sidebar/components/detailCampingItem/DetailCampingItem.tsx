import React from 'react';
import styled from 'styled-components';
import { SidebarContext } from '../../context';
import { useDetailCampingItem } from '../../hooks';
import { Placeholder } from '../../../common';

const SectionTitle = styled.h3`
  border-bottom: #2f7510 1px solid;
  padding-bottom: 10px;
  color: #2f7510;
`;

const DescriptionPlaceholder = styled(Placeholder)`
  min-width: 250px;
  min-height: 87px;
`;

const AddressPlaceholder = styled(Placeholder)`
  min-width: 250px;
  min-height: 45px;
`;

const ContactPlaceholder = styled(Placeholder)`
  min-width: 250px;
  min-height: 45px;
  margin-bottom: 15px;
`;

function DetailCampingItem() {
  const { campingId } = React.useContext(SidebarContext);
  const { campingItem, loading } = useDetailCampingItem(campingId);
  const placeholder = null === campingItem || loading;

  if (placeholder) {
    return (
      <>
        <section>
          <SectionTitle>Description</SectionTitle>
          <DescriptionPlaceholder />
        </section>
        <section>
          <SectionTitle>Address</SectionTitle>
          <AddressPlaceholder />
        </section>
        <section>
          <SectionTitle>Contact</SectionTitle>
          <ContactPlaceholder />
        </section>
      </>
    );
  }

  return (
    <>
      <section>
        <SectionTitle>Description</SectionTitle>
        {null !== campingItem.description &&
          <p>{campingItem.description}</p>
        }

        {null !== campingItem.nb_spots &&
          <p><b>Capacity: </b> {campingItem.nb_spots} spots</p>
        }
      </section>
      <section>
        <SectionTitle>Address</SectionTitle>
        {null !== campingItem.address &&
          <p>{campingItem.address}</p>
        }
        <p>{campingItem.zipcode} {campingItem.city}</p>
      </section>
      <section>
        <SectionTitle>Contact</SectionTitle>
        {null !== campingItem.phone_number &&
          <p><b>Phone number: </b> {campingItem.phone_number}</p>
        }
        {null !== campingItem.email &&
          <p><b>Email: </b> {campingItem.email}</p>
        }
        {null !== campingItem.website &&
          <p><b>Website:</b> <a href={campingItem.website} title={campingItem.name}>{campingItem.website}</a></p>
        }
      </section>
    </>
  );
}

export { DetailCampingItem }
