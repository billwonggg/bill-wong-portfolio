set -e

# Run npm dev in the background
npm run dev &

# Capture the process ID (PID) of npm dev
NPM_START_PID=$!

# Run Cypress tests
cypress run
EXIT_CODE=$?

# Stop npm dev by killing the process
kill $NPM_START_PID

# Exit with the Cypress tests' exit code
exit $EXIT_CODE
