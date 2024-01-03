import { extname } from 'path';

export const imageFileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(SVG|svg|JPG|JPEG|PNG|jpg|jpeg|png|gif)$/)) {
    return callback(new Error('Only image files are allowed!'), false);
  }
  return callback(null, true);
};

export const pdfFileFilter = (req, file, callback) => {
  if (
    !file.originalname.match(
      /\.(SVG|svg|JPG|JPEG|PNG|jpg|jpeg|png|gif|pdf|doc|docx|xls|xlsx)$/,
    )
  ) {
    return callback(
      new Error('Only image files and document files are allowed!'),
      false,
    );
  }
  return callback(null, true);
};

export const editFileName = (req, file, callback) => {
  const name = file.originalname.split('.')[0];
  const fileExtName = extname(file.originalname);
  const randomName = Array(4)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');
  return callback(null, `${name}-${randomName}${fileExtName}`);
};
