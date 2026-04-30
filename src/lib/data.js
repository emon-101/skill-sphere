export const getCourses = async()=> {
  const res = await fetch("https://skill-sphere-server.onrender.com/courses");
  const data = await res.json();
  return data;
}