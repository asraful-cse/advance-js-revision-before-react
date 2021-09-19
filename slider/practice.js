function toLetterGrade(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] >= 85) {
            textG = "A";
        } else if (arr[i] >= 80) {
            textG = "A-";
        } else if (arr[i] >= 75) {
            textG = "B+";
        } else if (arr[i] >= 70) {
            textG = "B";
        } else if (arr[i] >= 65) {
            textG = "B-";
        } else if (arr[i] >= 60) {
            textG = "C+";
        } else if (arr[i] >= 55) {
            textG = "C";
        } else if (arr[i] >= 50) {
            textG = "D";
        } else {
            textG = "F";
        }
    }
    return textG;
}
