import { z } from 'zod';

export const querySchema = z.object({
  question: z.string()
    .min(10, 'Please provide more details...')
    .max(500, 'Please keep your question under 500 characters')
});

export const responseSchema = z.object({
  message: z.string(),
  data: z.any().optional()
});

export const sendEmailSchema = z.object({
  to: z.string().email(),
  subject: z.string(),
  body: z.string()
});

export type DataQuery = {
  question: string;
};

export type DataResponse = {
  message: string;
  data?: any;
};

export type SendEmail = {
  to: string;
  subject: string;
  body: string;
};