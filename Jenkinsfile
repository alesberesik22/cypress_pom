pipeline{
    agent any
    parameters {
        string(name: 'SPEC',defaultValue: 'cypress/e2e/**', description: 'Enter the script that you want execute')
        choice(name:"BROWSER",choices: ['chrome','edge','firefox'], description: ' Choose browser where you want to execute your scripts')
        choice(name:'RUN_TYPE', choices:['normal', 'dashboard'], description:'Choose run type')
    }
    options {
        ansiColor('xterm')
    }
    stages {
        stage('Building') {
            steps {
                echo "Building application"
            }
            
        }
        stage('Testing') {
            when {
                expression {env.RUN_TYPE =='normal'} 
            }
            steps {
                sh "npm install"
                sh "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage('Testing') {
            when {
                expression {env.RUN_TYPE =='dashboard'}
            }
            withCredentials([string(credentialsId: 'cypress_key', variable: 'CYPRESS_K')]) { 
                steps {
                sh "npm install"
                sh "npx cypress run --record --key ${CYPRESS_K}"
            }
    }
            
        }
        stage('Deploying') {
            steps {
                echo "Deploying application"
            }
            
        }
    }
    post {
        always {
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: '/tmp/app/cypress/reports/html/', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }
}