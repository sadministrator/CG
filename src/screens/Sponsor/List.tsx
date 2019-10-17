import React, { Component } from 'react'
import ProfileCardComponent from '../../components/ProfileCardComponent'
import SearchBarComponents from '../../components/SearchBarComponent'
import PTRView from 'react-native-pull-to-refresh'
import EmptyListMessage from '../../components/EmptyListMessageComponent'
import { Button, Text } from 'native-base'
import { connect } from 'react-redux'
import { getSponsorsAction } from '../../actions/sponsors-list-actions'
import { STYLES } from '../../style';
import { NavigationEvents } from 'react-navigation';
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import { timeAgo } from '../../helpers'

interface ListProps {
  navigation: any
  getSponsorsAction: (arg0?: string) => void
  loading: boolean
  error: any
  list: Array<any>
}

interface ListState {
  filterActive: boolean
  staff: Array<any>
  message: any
  search: string
}

export class List extends Component<ListProps, ListState> {
  constructor(props: ListProps) {
    super(props)
    this.state = {
      filterActive: false,
      staff: [],
      message: Component,
      search: '',
    }
    this.props.getSponsorsAction()
  }

  goToOthersProfile = (name: string) => {
    const { navigate } = this.props.navigation
    navigate('othersProfile', { name: name })
  }

  componentWillMount = () => {
    this.props.getSponsorsAction()
  }

  filterList = (text: string) => {
    let filter: boolean = false
    this.setState({
      search: text
    })
    text = text.replace(/ /g, '')
    if (text.length > 0)
      filter = true
    this.props.getSponsorsAction(escape(text))
    this.setState({ filterActive: filter });
  }

  refreshList = () => {
    this.setState({
      filterActive: false,
      search: ''
    })
    this.props.getSponsorsAction();
  }

  getSnapshotBeforeUpdate = (prevp: ListProps) => {
    if (prevp.list != this.props.list)
      this.renderList()
  }

  renderList = () => {
    const msg = (this.props.list.length < 1 && this.state.filterActive) ? 'No matching Sponsors' : 'There are no Sponsors'
    const msgComponent = (this.props.list.length < 1) ? (<EmptyListMessage text={msg} />) : (<></>)
    let sponsorList: Array<any> = this.props.list
    if ((typeof sponsorList.length !== 'undefined')) {
      const list = sponsorList.map(p => {
        const date = timeAgo(p.last_signed)
        var arrayRoles = p.roles.split(',')
        return (
          <ProfileCardComponent
            list_name='Sponsor'
            id={p.id}
            first_name={p.first_name}
            last_name={p.last_name}
            number={p.numSponsees}
            type='students'
            role={arrayRoles}
            profile_picture={p.profile_picture}
            last_signed={date}
            on_click={() => this.goToOthersProfile(p.first_name)}
          />
        );
      });
      this.setState({
        staff: list,
        message: msgComponent
      })
    }
  }

  render() {
    return (
      <PTRView onRefresh={this.refreshList}>
        <NavigationEvents
          onWillFocus={() => {
            this.props.getSponsorsAction()
            this.setState({
              filterActive: false,
              message: <></>,
              search: ''
            })
          }}
        />
        <View style={{ padding: 16, }}>
          <SearchBarComponents
            setText={this.state.search}
            callback={this.filterList}
          />
          <Button style={STYLES.button}>
            <Text style={STYLES.textButton}>
              Create New
              </Text>
          </Button>
          {!this.props.loading ?
            this.state.staff :
            (<View style={styles.container}>
              <ActivityIndicator />
            </View>)}
          {this.state.message}
        </View>
      </PTRView>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    loading: state.sponsorsListReducer.loading,
    list: state.sponsorsListReducer.sponsors,
    error: state.sponsorsListReducer.error
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getSponsorsAction: (search?: string) => dispatch(getSponsorsAction(search))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200
  }
});