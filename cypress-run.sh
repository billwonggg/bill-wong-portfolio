set -e

# Run npm start in the background
npm start &

# Capture the process ID (PID) of npm start
NPM_START_PID=$!

# Run Cypress tests
cypress run
EXIT_CODE=$?

# Stop npm start by killing the process
kill $NPM_START_PID

# Exit with the Cypress tests' exit code
exit $EXIT_CODE
