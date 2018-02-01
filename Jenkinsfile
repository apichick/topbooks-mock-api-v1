pipeline {

    agent any 
    parameters {
        string(name: 'ORGANIZATION', description: 'Apigee Organization')
        string(name: 'ENVIRONMENT', description: 'Apigee Environment')
    }
    stages {
        stage('Test-Parameters'){
            steps {
                sh 'echo ${params.ORGANIZATION}'
            }
        }
        stage('Test-Credentials'){
            steps {
                withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'apigee-credentials',
                            usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {     
                    sh 'echo ${USERNAME}'
                }
            }
        }
    }

}
