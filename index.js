module.exports = function(kicadComponents) {
    return kicadComponents
        .split('EndCmp')
        .map(function(componentString) {
            var component = {};
            componentString.split('\n')
                .map(function(componentLine) {
                    return componentLine.match(/^(\w+) *= *(.+);$/);
                })
                .filter(function(matchedComponentPatterns) {
                    return matchedComponentPatterns && matchedComponentPatterns.length === 3;
                })
                .map(function(matchedComponentPatterns) {
                    matchedComponentPatterns[1] = {
                        TimeStamp: 'timestamp',
                        Reference: 'reference',
                        ValeurCmp: 'value',
                        IdModule: 'module'
                    }[matchedComponentPatterns[1]];
                    return matchedComponentPatterns;
                })
                .forEach(function(matchedFilteredComponentPatterns) {
                    component[matchedFilteredComponentPatterns[1]] = matchedFilteredComponentPatterns[2];
                });
            return component;
        })
        .filter(function(component) {
            return component.module;
        });
};
