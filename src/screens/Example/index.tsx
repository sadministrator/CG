import React, { Component } from 'react'
import ExampleModel from '../../models/example-model';
import { Container, Content, Text, View } from 'native-base';
import { connect } from 'react-redux';
import { apiCall } from '../../actions/example-actions';
import ExampleComponent from '../../components/ExampleComponent';


interface ExampleProps {
    exampleCall: () => void;
    navigation? :any;
    example: ExampleModel;
    loading: boolean;
}

interface ExampleState {

}

class ExampleScreen extends Component<ExampleProps, ExampleState> {

    componentDidMount() {
        this.props.exampleCall();
    }

    render () {
        return (
            <Container>
                <Content>
                    <View padder>
                        <Text>
                            Example text
                        </Text>
                        <ExampleComponent />
                    </View>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        example: state.exampleReducer.example,
        loading: state.exampleReducer.loading
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        exampleCall: () => dispatch(apiCall())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExampleScreen);