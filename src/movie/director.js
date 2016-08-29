/**
 * Created by Administrator on 2016/8/29.
 */


/**
 * director for the movie.
 */
define(['jxg', 'base/board', 'math/math' , 'utils/color', 'utils/type', 'utils/event'], function (JXG, Board, Mat, Color, Type,
                                                                                                   EventEmitter) {

    "use strict";




    JXG.extend(JXG, /** @lends Board */ {

        ACTORS: {},

        testExtendFun: function () {
            // console.log(JXG.boards)
            for(var i in JXG.boards){
                // console.log(i)
                // console.log(JXG.boards[i])
                JXG.boards[i].pauseAllAnimation()
            }
            return 0;
        },


        sceneInit: function (cast) {
            for(var i in cast){
                 console.log(cast[i])
                // console.log(cast[i].attributes)
                for(var j in JXG.boards) {
                    var str = "JXG.ACTORS.actor_" + cast[i].id + " = JXG.boards[j].create('" + cast[i].elementType + "'," + JSON.stringify(cast[i].parents) + "," + JSON.stringify(cast[i].attributes) + ");"
                    console.log(str)
                    eval(str)
                }
            }

            return 0;
        },


        sceneStart: function (story) {
            var storyStringArray = [];
            for(var i in story){
                var actor = "actor_"+story[i].id;
                var str = "JXG.ACTORS." +actor + ".moveAlong("+ JSON.stringify(story[i].moveAlong) +"," + story[i].time
                console.log(str)
                storyStringArray.push(str)
            }
            console.log(storyStringArray)
            var storyStringArray_re = storyStringArray.reverse()
            console.log(storyStringArray_re)

            var string_story = "";
            for(var i in storyStringArray_re){
                string_story = storyStringArray_re[i]+",{callback:function(){" + string_story + "}" + "})"
            }
            console.log(string_story)
            eval(string_story)
            console.log(JXG)
        }

    })




});
