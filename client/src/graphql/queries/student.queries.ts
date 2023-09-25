import { gql } from '@apollo/client';

export const getStudents = gql`
  query students {
    id  
    fullName
  }
`

export const getEnrolledStudents = gql`
  query enrollment {
  enrollment {
    id
    fullName
  }
}
`