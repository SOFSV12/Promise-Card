import * as yup from "yup";

export const userItemsSchema = yup.object().shape({
  items: yup
    .string()
    .trim()
    .max(25, "Must be shorter than 25 characters")
    .required("pass an Item"),
});

export const UserDetailsSchema = yup.object().shape({
  cardName: yup
    .string()
    .trim()
    .max(25, "must be less than 25 characters")
    .required("pass card title/name"),
  userName: yup.string().trim().required("pass in a name"),
  userEmail: yup
    .string()
    .trim()
    .email("Please enter a valid email")
    .min(5, "Must be longer than 5 characters")
    .max(255, "Must be shorter than 255 characters")
    .required("Email is required"),
});
