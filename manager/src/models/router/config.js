import Addques from '../../views/home/questions/addques/Addques'
import Classify from '../../views/home/questions/classify/classify'
import Examine from '../../views/home/questions/examine/examine'
import Adduser from '../../views/home/user/adduser/Adduser'
import Usershow from '../../views/home/user/usershow/Usershow'
import Addexam from '../../views/home/exam/addexam/Addexam'
import Examlist from '../../views/home/exam/examlist/examList'
// import listDetail from '../../views/home/exam/listDetail'
// import AddDetail from '../../views/home/exam/addDetail/index'
import Classgav from '../../views/home/class/classgav/classGav'
import Classroom from '../../views/home/class/classroom/classRoom'
import Student from '../../views/home/class/student/student'
import Awaiting from '../../views/home/papers/awaiting/Awaiting'
// import Detail from '../../views/home/questions/addques/detail'

export default {
    routes: [{
        name: 'router.questions',
        icon: 'sliders',
        children: [{
            name: 'router.questions.add',
            id: 'main-addQuestions',
            path: '/products/addques',
            component:Addques
        }, {
            name: 'router.questions.type',
            id: 'main-questionsType',
            path: '/products/classify',
            component:Classify
        }, {
            name: 'router.questions.check',
            id: 'main-watchQuestions',
            path: '/products/examine',
            component:Examine
        }]
    }, {
        name: 'router.user',
        icon: 'user',
        children: [{
            name: 'router.user.add',
            id: 'main-addUser',
            path: '/user/adduser',
            component:Adduser
        }, {
            name: 'router.user.display',
            id: 'main-showUser',
            path: '/user/usershow',
            component:Usershow
        }]
    }, {
        name: 'router.exam',
        icon: 'schedule',
        children: [{
            name: 'router.exam.add',
            id: 'main-addExam',
            path: '/exam/addexam',
            component:Addexam
        }, {
            name: 'router.exam.list',
            id: 'main-examList',
            path: '/exam/examlist',
            component:Examlist
        }]
    }, {
        name: 'router.class',
        icon: 'project',
        children: [{
            name: 'router.class.management',
            id: 'main-grade',
            path: '/class/classgav',
            component:Classgav
        }, {
            name: 'router.class.classRoom',
            id: 'main-room',
            path: '/class/classroom',
            component:Classroom
        }, {
            name: 'router.class.student',
            id: 'main-student',
            path: '/class/student',
            component:Student
        }]
    }, {
        name: 'router.mark',
        icon: 'sliders',
        children: [{
            name: 'router.mark.Awaiting',
            id: 'main-examPaperClassList',
            path: '/papers/awaiting',
            component:Awaiting
        }]
    }]

}