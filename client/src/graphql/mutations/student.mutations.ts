import { gql } from '@apollo/client';

export const enrollStudent = gql`
  mutation enrollStudent($enrollId: ID!) {
    enroll(id: $enrollId) {
      fullName
    }
}
`

export const getEnrolledStudents = gql`
  mutation registerNewStudent($email: String!, $fullName: String!) {
    registerStudent(email: $email, fullName: $fullName) {
      fullName
    }
  }
`