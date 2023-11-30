function skillsMember() {
    return {
        name: 'skillsMember',
        templateUrl: 'app/components/members/skillsMember.html',
        restrict: 'E',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}