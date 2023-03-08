import * as yup from 'yup';

export const searchSchema = {
  query: yup.object({
    filter: yup.string().trim(),
    keyword: yup.string().trim().required(),
    size: yup.number().positive().integer().default(10),
  })
}

export const postSchema = {
  body: yup.object({
    title: yup.string().trim().required(),
    content: yup.string().trim().required(),
    reporter: yup.string().trim(),
    category: yup.string().trim(),
    id: yup.number(),
    nid: yup.string().trim(),
    start_dttm: yup.date(),
    update_dttm: yup.date()
  })
}
