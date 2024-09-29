export async function getQuestions({ limit, start }) {
  try {
    const res = await fetch(
      `http://localhost:8000/questions?_start=${start}&_limit=${limit}`
    );
    if (!res.ok) throw new Error("Cannot get questions");
    const data = await res.json();

    return { questions: data };
  } catch (error) {
    console.log(error.message);
    return { error: error.message };
  }
}
