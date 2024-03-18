import axios from "axios";
import { ErrorToast, SuccessToast } from "../utility/FormHelper";
import { getToken, setToken, setUserDetails } from "../utility/SessionHelper";

// const BASE_URL = `https://e-learning-server-3wxl.onrender.com/api/v1`;
const BASE_URL = `https://e-learning-server-eu4f.onrender.com/api/v1`;

const Headers = { headers: { token: getToken() } };

// ::::::::: API: REGISTRATION API :::::::::
export const REGISTRATION_API = async (fullName, email, password) => {
  try {
    const postBody = { fullName, email, password };
    const { data } = await axios.post(`${BASE_URL}/registration`, postBody);
    if (data.success) {
      SuccessToast(data.message);
      return true;
    }
  } catch (error) {
    ErrorToast(error.response.data.message);
  }
};

// ::::::::: API: LOGIN API :::::::::
export const LOGIN_API = async (email, password) => {
  try {
    const postBody = { email, password };
    const { data } = await axios.post(`${BASE_URL}/login`, postBody);

    if (data.success) {
      // set email, token in localStorage
      setToken(data.token);
      SuccessToast(data.message);
      return true;
    }
  } catch (error) {
    ErrorToast(error.response.data.message);
  }
};

// ::::::::: API: Category :::::::::
export const CATEGORY_API_REQUEST = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/all-category`);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    return [];
  }
};

// ::::::::: API: fall-course :::::::::
export const ALL_COURSE_API_REQUEST = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/all-course`);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    return [];
  }
};

// ::::::::: API: fall-course :::::::::
export const GET_MODULE_LESSON_API_REQUEST = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/get-all-lesson`, Headers);
    if (data.success) {
      return data;
    }
  } catch (error) {
    return [];
  }
};

// ::::::::: API: course by category :::::::::
export const COURSE_BY_CATEGORY_API_REQUEST = async (categoryID) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/course-by-category/${categoryID}`
    );
    if (data.success) {
      return data.data;
    }
    return data;
  } catch (error) {
    return [];
  }
};

// ::::::::: API: course by category :::::::::
export const COURSE_DETAILS_API_REQUEST = async (courseId) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/course-details/${courseId}`);
    if (data.success) {
      return data.data;
    }
    return data;
  } catch (error) {
    return [];
  }
};

// ::::::::: API: all-notification :::::::::
export const GET_ALL_NOTIFICATION_REQUEST = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/get-all-notification`);
    if (data.success) {
      return data.data;
    }
    return data;
  } catch (error) {
    return [];
  }
};

// ::::::::: API: Get All Blogs :::::::::
export const GET_ALL_BLOGS_API_REQUEST = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/blogs`);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    return [];
  }
};

// ::::::::: API: Single blog :::::::::
export const BLOG_DETAILS_API_REQUEST = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/blogs/${id}`);
    if (data.success) {
      return data.data;
    }
    return data;
  } catch (error) {
    return [];
  }
};

// ::::::::: API: user profile update :::::::::
export const USER_PROFILE_UPDATE_API_REQUEST = async (formData) => {
  try {
    const { data } = await axios.post(
      `${BASE_URL}/user-profile-update`,
      formData,
      Headers
    );
    if (data.success) {
      SuccessToast(data.message);
      return data.data;
    }
    return data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized access. Please log in.");
    } else {
      console.error("An error occurred:", error.message);
    }
  }
};

// ::::::::: API: Get user details :::::::::
export const GET_USER_PROFILE_DETAILS_API_REQUEST = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/user-profile-details`,
      Headers
    );
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    return [];
  }
};
// ::::::::: API: Get user details :::::::::
export const ENROLL_COURSE_API_REQUEST = async (courseId) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/enroll-course/${courseId}`,
      Headers
    );
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    return [];
  }
};
// ::::::::: API: Get user details :::::::::
export const GET_ENROLL_COURSE_API_REQUEST = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/enroll-course-info`, Headers);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    return [];
  }
};
// ::::::::: API: Get user details :::::::::
export const GET_ENROLLD_MODULE_API_REQUEST = async (courseId) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/get-single-module/${courseId}`,
      Headers
    );
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    return [];
  }
};

// ::::::::: API: send email :::::::::
export const SEND_EMAIL_API_REQUEST = async (recipients, subject, text) => {
  try {
    const formData = { recipients: recipients, subject: subject, text: text };
    const { data } = await axios.post(`${BASE_URL}/send-email`, formData);
    if (data.success) {
      SuccessToast(data.message);
      return data.data;
    }
  } catch (error) {
    return [];
  }
};
