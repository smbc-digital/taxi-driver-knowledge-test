import showAToZFooter from './index'

describe('showBreadcrumb', () => {
    it('should find footer with id atoz and remove hidden class when passed true', () => {
        // Arrange
        document.body.innerHTML = '<div id="atoz" class="atoz hidden"></div>'

        // Act
        showAToZFooter(true)
        var result = document.getElementById('atoz').className
        
        // Assert
        expect(result).toEqual('atoz')
    })
    it('should find div with id atoz and add hidden class when passed false', () => {
        // Arrange
        document.body.innerHTML = '<div id="atoz" class="atoz"></div>'

        // Act
        showAToZFooter(false)
        var result = document.getElementById('atoz').className
        
        // Assert
        expect(result).toEqual('atoz hidden')
    })
})