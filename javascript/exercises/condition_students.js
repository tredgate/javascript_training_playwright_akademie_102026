const studentName = "Marie Novotná";
const actualScore = 55;
const graduationLimit = 75;

if (actualScore >= graduationLimit) {
  console.log(
    `${studentName} prospěl/a se ziskem ${actualScore} bodů. Minimum bylo: ${graduationLimit} bodů.`,
  );
} else {
  console.log(
    `${studentName} neprospěl/a se ziskem ${actualScore} bodů. Minimum bylo: ${graduationLimit} bodů, chybělo mu/jí ${graduationLimit - actualScore} bodů`,
  );
}
