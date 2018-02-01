pipeline {

    agent any 
    stages {
        stage('Test'){
            steps {
                withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'apigee-credentials',
                            usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {     
                    sh 'echo $USERNAME'
                }
            }
        }
    }

}
