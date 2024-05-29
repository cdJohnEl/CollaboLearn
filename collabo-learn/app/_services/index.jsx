import { gql, request } from "graphql-request";

const MASTER_URL="https://api-us-east-1-shared-usea1-02.hygraph.com/v2/"+process.env.NEXT_PUBLIC_HYGRAPH_KEY+"/master";


export const getCourseList = async() => {
    const query=gql`
    query CourseList {
        courseLists {
          name
          banner {
            url
          }
          free
          id
          totalChapters
          tag
        }
      }
    `
    const result= await request(MASTER_URL,query);
    return result;
}

export const getCourseById = async (id) => {
  const query = gql`
    query course {
      courseList(where: {id: "`+ id + `"}) {
        id
        name
        free
        totalChapters
        description
        chapter {
          ... on Chapter {
            id
            name
            youtubeUrl
            video {
              url
            }
          }
        }
        sourceCode
        tag
      }
    }
    
  `
const result = await request(MASTER_URL, query);
return result;
}



export const EnrollCourse = async(courseId, userEmail) => {
    const mutationQuery=gql`
    mutation EnrollCourse {
        createUserEnrollCourse(
          data: {userEmail: "`+userEmail+`", courseId: "`+courseId+`"}
        ) {
          id
        }
      }
    `
    const result= await request(MASTER_URL,mutationQuery);
    return result;
}

export const PublishCourse = async (id) => {
    const mutationQuery = gql`
    mutation EnrollCourse {
        publishUserEnrollCourse(where: {id: "`+id+`"})
        {
          id
        }
      }
      
    `
    const result = await request(MASTER_URL,mutationQuery);
    return result;
}

export const GetUserCourseList = async (userEmail) => {
  const query=gql`
  query UserCourseList {
    userEnrollCourses(where: {userEmail: "`+userEmail+`"}) {
      courseList {
        banner {
          url
        }
        description
        name
        id
        free
        sourceCode
        tag
        totalChapters
      }
    }
  }  
  `
  const result = await request(MASTER_URL, query);
  return result;
}