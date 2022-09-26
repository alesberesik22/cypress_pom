pipeline{
    agent any
    parameters {
        string(name: 'SPEC',defaultValue: 'cypress/e2e/**', description: 'Enter the script that you want execute')
        choice(name:"BROWSER",choices: ['chrome','edge','firefox'], description: ' Choose browser where you want to execute your scripts')
    }
    options {
        ansiColor('xterm')
    }
    stages {
        stage('Building') {
            echo "Building application"
        }
        stage('Testing') {
            steps {
                bat "npm install"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage('Deploying') {
            echo "Deploying application"
        }
    }
}