function convertDate(createdAt) {
  return new Date(createdAt).toLocaleDateString("fa-IR");
}

export default convertDate;
