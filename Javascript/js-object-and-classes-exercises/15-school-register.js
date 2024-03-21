function solve(input) {
    const schoolBook = {};
    for (let student of input) {
        const studentData = student.split(', ');
        const name = studentData[0].split(': ')[1];
        let grade = Number(studentData[1].split(': ')[1]);
        const score = Number(studentData[2].split(': ')[1]);

        if (score >= 3) {
            grade += 1;
        } else {
            continue
        }

        if (!schoolBook[grade]) {
            schoolBook[grade] = { students: [], totalScore: 0 };
        }

        schoolBook[grade].students.push(name);
        schoolBook[grade].totalScore += score;
    }

    for (let grade in schoolBook) {
        schoolBook[grade].totalScore = (schoolBook[grade].totalScore / schoolBook[grade].students.length).toFixed(2);
    }

    Object
        .keys(schoolBook)
        .sort((a, b) => a - b)
        .forEach(grade => console.log(
            `${grade} Grade\nList of students: ${schoolBook[grade].students.join(', ')}\nAverage annual score from last year: ${schoolBook[grade].totalScore}\n`))
}


solve([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
    ])