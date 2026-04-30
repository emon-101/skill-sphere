export const getCourses = async()=> {
  const res = await fetch("https://skill-sphere-server.onrender.com/courses");
  const data = await res.json();
  return data;
}

export const getCourseDetails = async(id)=> {
  const res = await fetch(`https://skill-sphere-server.onrender.com/courses/${id}`);
  const data = await res.json();
  return data;
}

export const getInstructors = async()=> {
  const res = await fetch(`https://skill-sphere-server.onrender.com/instructors`);
  const data = await res.json();
  return data;
}