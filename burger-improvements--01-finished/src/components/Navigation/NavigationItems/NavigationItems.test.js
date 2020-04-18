import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NavigationItems from './NavigationItems'
import NavigationItem from './NavigationItem/NavigationItem'

configure({
    adapter: new Adapter(),
})

describe('<NavigationItems/>', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<NavigationItems />)
    })
    it('shold render two <NavigationItem/> elements if not authenticathed ', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2)
    })

    it('shold render three <NavigationItem/> elements if  authenticathed ', () => {
        // wrapper = shallow(<NavigationItems isAuthenticated />)
        wrapper.setProps({
            isAuthenticated: true,
        })
        expect(wrapper.find(NavigationItem)).toHaveLength(3)
    })

    it('shold render  <NavigationItem/> Logout if  authenticathed ', () => {
        wrapper.setProps({
            isAuthenticated: true,
        })
        expect(
            wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)
        ).toEqual(true)
    })
})
